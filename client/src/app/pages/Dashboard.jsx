import { FilePenLineIcon, LoaderCircleIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloud, UploadCloudIcon, XIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'
import pdfToText from 'react-pdftotext'

const colors = [
  { accent: '#6366f1', bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.2)' },
  { accent: '#f59e0b', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)' },
  { accent: '#ef4444', bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.2)' },
  { accent: '#0ea5e9', bg: 'rgba(14,165,233,0.08)', border: 'rgba(14,165,233,0.2)' },
  { accent: '#22c55e', bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.2)' },
]

const Modal = ({ title, onClose, onSubmit, children, submitLabel, isLoading }) => (
  <div onClick={onClose} style={{
    position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)',
    zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
  }}>
    <form onClick={e => e.stopPropagation()} onSubmit={onSubmit} style={{
      background: '#fff', borderRadius: '16px', padding: '32px', width: '100%', maxWidth: '420px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.2)', position: 'relative', fontFamily: "'DM Sans', sans-serif",
    }}>
      <button type="button" onClick={onClose} style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}>
        <XIcon size={18} />
      </button>
      <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '20px' }}>{title}</h2>
      {children}
      <button type="submit" disabled={isLoading} style={{
        width: '100%', padding: '12px', background: '#22c55e', color: '#fff', border: 'none',
        borderRadius: '10px', fontSize: '15px', fontWeight: 600, cursor: 'pointer',
        fontFamily: "'Sora', sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
        opacity: isLoading ? 0.7 : 1,
      }}>
        {isLoading && <LoaderCircleIcon size={16} className="animate-spin" />}
        {submitLabel}
      </button>
    </form>
  </div>
)

const inputStyle = {
  width: '100%', padding: '11px 14px', border: '1px solid #e5e7eb', borderRadius: '10px',
  fontSize: '14px', outline: 'none', fontFamily: "'DM Sans', sans-serif", boxSizing: 'border-box', marginBottom: '14px',
}

const Dashboard = () => {
  const { user, token } = useSelector(state => state.auth)
  const [allResumes, setAllResumes] = useState([])
  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [title, setTitle] = useState('')
  const [resume, setResume] = useState(null)
  const [editResumeId, setEditResumeId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const navigate = useNavigate()

  const loadAllResumes = async () => {
    try {
      const { data } = await api.get('/api/users/resumes', { headers: { Authorization: token } })
      setAllResumes(data.resumes)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const createResume = async (e) => {
    try {
      e.preventDefault()
      const { data } = await api.post('/api/resumes/create', { title }, { headers: { Authorization: token } })
      setAllResumes([...allResumes, data.resume])
      setTitle(''); setShowCreateResume(false)
      navigate(`/app/builder/${data.resume._id}`)
    } catch (error) { toast.error(error?.response?.data?.message || error.message) }
  }

  const uploadResume = async (e) => {
    e.preventDefault(); setIsLoading(true)
    try {
      const resumeText = await pdfToText(resume)
      const { data } = await api.post('/api/ai/upload-resume', { title, resumeText }, { headers: { Authorization: token } })
      setTitle(''); setResume(null); setShowUploadResume(false)
      navigate(`/app/builder/${data.resumeId}`)
    } catch (error) { toast.error(error?.response?.data?.message || error.message) }
    setIsLoading(false)
  }

  const editTitle = async (e) => {
    try {
      e.preventDefault()
      const { data } = await api.put('/api/resumes/update', { resumeId: editResumeId, resumeData: { title } }, { headers: { Authorization: token } })
      setAllResumes(allResumes.map(r => r._id === editResumeId ? { ...r, title } : r))
      setTitle(''); setEditResumeId('')
      toast.success(data.message)
    } catch (error) { toast.error(error?.response?.data?.message || error.message) }
  }

  const deleteResume = async (resumeId) => {
    if (!window.confirm('Are you sure you want to delete this resume?')) return
    try {
      const { data } = await api.delete(`/api/resumes/delete/${resumeId}`, { headers: { Authorization: token } })
      setAllResumes(allResumes.filter(r => r._id !== resumeId))
      toast.success(data.message)
    } catch (error) { toast.error(error?.response?.data?.message || error.message) }
  }

  useEffect(() => { loadAllResumes() }, [])

  return (
    <>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 32px', fontFamily: "'DM Sans', sans-serif", minHeight: 'calc(100vh - 65px)', background: '#f8fafc' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: '26px', fontWeight: 700, color: '#0f172a', margin: '0 0 4px', letterSpacing: '-0.02em' }}>
            My Resumes
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '14px' }}>Welcome back, <strong style={{ color: '#64748b' }}>{user?.name}</strong></p>
        </div>

        {/* Action Cards */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', flexWrap: 'wrap' }}>
          {[
            { label: 'Create Resume', icon: PlusIcon, color: '#6366f1', bg: 'rgba(99,102,241,0.07)', border: 'rgba(99,102,241,0.2)', action: () => setShowCreateResume(true) },
            { label: 'Upload Existing', icon: UploadCloudIcon, color: '#8b5cf6', bg: 'rgba(139,92,246,0.07)', border: 'rgba(139,92,246,0.2)', action: () => setShowUploadResume(true) },
          ].map(({ label, icon: Icon, color, bg, border, action }, i) => (
            <button key={i} onClick={action} style={{
              width: '160px', height: '160px', background: '#fff', border: `1.5px dashed ${border}`,
              borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: '12px', cursor: 'pointer', transition: 'all 0.2s', fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = bg; e.currentTarget.style.borderStyle = 'solid'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderStyle = 'dashed'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ width: '44px', height: '44px', background: bg, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={20} style={{ color }} />
              </div>
              <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>{label}</span>
            </button>
          ))}
        </div>

        {allResumes.length > 0 && (
          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '28px', marginBottom: '16px' }}>
            <p style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '20px' }}>Your Resumes ({allResumes.length})</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              {allResumes.map((r, i) => {
                const c = colors[i % colors.length]
                return (
                  <button key={i} onClick={() => navigate(`/app/builder/${r._id}`)}
                    style={{
                      width: '160px', height: '160px', background: '#fff',
                      border: `1.5px solid ${hoveredCard === i ? c.border : '#e2e8f0'}`,
                      borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                      gap: '10px', cursor: 'pointer', position: 'relative', transition: 'all 0.2s', padding: '16px',
                      boxShadow: hoveredCard === i ? '0 8px 30px rgba(0,0,0,0.1)' : 'none',
                      transform: hoveredCard === i ? 'translateY(-3px)' : 'none',
                    }}
                    onMouseEnter={() => setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}>
                    <div style={{ width: '40px', height: '40px', background: c.bg, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FilePenLineIcon size={18} style={{ color: c.accent }} />
                    </div>
                    <p style={{ fontSize: '13px', color: '#1e293b', fontWeight: 600, textAlign: 'center', lineHeight: 1.3, margin: 0, width: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.title}</p>
                    <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0 }}>
                      {new Date(r.updatedAt).toLocaleDateString()}
                    </p>
                    {hoveredCard === i && (
                      <div onClick={e => e.stopPropagation()} style={{ position: 'absolute', top: '8px', right: '8px', display: 'flex', gap: '2px' }}>
                        <button onClick={() => { setEditResumeId(r._id); setTitle(r.title) }} style={{ background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '6px', padding: '5px', cursor: 'pointer', color: '#64748b' }}>
                          <PencilIcon size={13} />
                        </button>
                        <button onClick={() => deleteResume(r._id)} style={{ background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '6px', padding: '5px', cursor: 'pointer', color: '#ef4444' }}>
                          <TrashIcon size={13} />
                        </button>
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {showCreateResume && (
        <Modal title="Create a New Resume" onClose={() => { setShowCreateResume(false); setTitle('') }} onSubmit={createResume} submitLabel="Create Resume">
          <input style={inputStyle} value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Software Engineer Resume" required />
        </Modal>
      )}

      {showUploadResume && (
        <Modal title="Upload Existing Resume" onClose={() => { setShowUploadResume(false); setTitle(''); setResume(null) }} onSubmit={uploadResume} submitLabel={isLoading ? 'Uploading...' : 'Upload & Import'} isLoading={isLoading}>
          <input style={inputStyle} value={title} onChange={e => setTitle(e.target.value)} placeholder="Resume title" required />
          <label htmlFor="resume-input" style={{ display: 'block', cursor: 'pointer' }}>
            <div style={{
              border: '2px dashed #d1d5db', borderRadius: '10px', padding: '32px 16px', textAlign: 'center',
              color: resume ? '#22c55e' : '#9ca3af', transition: 'all 0.2s', marginBottom: '14px',
            }}>
              <UploadCloud size={28} style={{ margin: '0 auto 10px', display: 'block' }} />
              <p style={{ fontSize: '14px', margin: 0 }}>{resume ? resume.name : 'Click to upload PDF resume'}</p>
            </div>
          </label>
          <input type="file" id="resume-input" accept=".pdf" hidden onChange={e => setResume(e.target.files[0])} />
        </Modal>
      )}

      {editResumeId && (
        <Modal title="Rename Resume" onClose={() => { setEditResumeId(''); setTitle('') }} onSubmit={editTitle} submitLabel="Save Changes">
          <input style={inputStyle} value={title} onChange={e => setTitle(e.target.value)} placeholder="Resume title" required />
        </Modal>
      )}

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>
    </>
  )
}

export default Dashboard

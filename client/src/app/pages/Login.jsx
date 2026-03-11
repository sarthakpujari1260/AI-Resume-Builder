import { Lock, Mail, User2Icon, FileText, Sparkles, Download } from 'lucide-react'
import { useState } from "react"
import api from '../configs/api'
import { useDispatch } from 'react-redux'
import { login } from '../app/features/authSlice'
import toast from 'react-hot-toast'
import logo from "../assets/logo.svg"

export default function Login() {
  const dispatch = useDispatch()
  const query = new URLSearchParams(window.location.search)
  const urlState = query.get('state')
  const [state, setState] = useState(urlState || 'login')
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await api.post(`/api/users/${state}`, formData)
      dispatch(login(data))
      localStorage.setItem('token', data.token)
      toast.success(data.message)
    } catch (error) {
      toast(error?.response?.data?.message || error.message)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; box-sizing: border-box; }
        body { background: #f0f7ff !important; margin: 0; }
      `}</style>

      <div style={{ minHeight: '100vh', display: 'flex', background: '#f0f7ff' }}>

        {/* ── Left Panel ── */}
        <div style={{
          width: '52%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          padding: '48px', position: 'relative', overflow: 'hidden',
          background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 40%, #38bdf8 100%)'
        }} className="hidden lg:flex">
          <div style={{ position: 'absolute', top: -60, left: -60, width: 280, height: 280, background: 'rgba(255,255,255,0.08)', borderRadius: '50%', filter: 'blur(80px)' }} />
          <div style={{ position: 'absolute', bottom: -40, right: -40, width: 320, height: 320, background: 'rgba(125,211,252,0.15)', borderRadius: '50%', filter: 'blur(100px)' }} />

          <a href="/" style={{ position: 'relative', zIndex: 1 }}>
            <img src={logo} alt="logo" style={{ height: 36, filter: 'brightness(0) invert(1)' }} />
          </a>

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div>
              <h2 style={{ color: 'white', fontSize: 38, fontWeight: 600, lineHeight: 1.2, maxWidth: 280, margin: 0 }}>
                {state === 'login' ? 'Welcome back.' : 'Start building your future.'}
              </h2>
              <p style={{ color: 'rgba(186,230,253,1)', fontSize: 14, marginTop: 12, maxWidth: 260, lineHeight: 1.6 }}>
                {state === 'login'
                  ? 'Sign in to access your resumes and continue where you left off.'
                  : 'Create your free account and let AI write your perfect resume in minutes.'}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: <Sparkles size={13} />, text: 'AI-powered content suggestions' },
                { icon: <FileText size={13} />, text: 'Professional resume templates' },
                { icon: <Download size={13} />, text: 'One-click PDF export' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999,
                  padding: '10px 16px', width: 'fit-content'
                }}>
                  <span style={{ color: 'rgba(255,255,255,0.75)', display: 'flex' }}>{item.icon}</span>
                  <span style={{ color: 'white', fontSize: 12, fontWeight: 500 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <p style={{ position: 'relative', zIndex: 1, color: 'rgba(186,230,253,0.8)', fontSize: 11, margin: 0 }}>
            ✦ Ready in minutes &nbsp;·&nbsp; ✦ Free to start
          </p>
        </div>

        {/* ── Right Panel ── */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px', position: 'relative' }}>
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.03,
            backgroundImage: 'radial-gradient(#1d4ed8 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} />

          <div style={{ position: 'relative', width: '100%', maxWidth: 360 }}>

            {/* Mobile logo */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }} className="lg:hidden">
              <a href="/"><img src="/logo.svg" alt="logo" style={{ height: 32 }} /></a>
            </div>

            <div style={{
              background: 'white', borderRadius: 24, border: '1px solid #f1f5f9',
              boxShadow: '0 20px 60px rgba(37,99,235,0.08)', padding: '36px 32px'
            }}>
              <h1 style={{ fontSize: 21, fontWeight: 600, color: '#0f172a', margin: '0 0 4px' }}>
                {state === 'login' ? 'Sign in' : 'Create account'}
              </h1>
              <p style={{ fontSize: 12, color: '#9ca3af', margin: '0 0 28px' }}>
                {state === 'login' ? "Don't have an account? " : 'Already have an account? '}
                <button onClick={() => setState(s => s === 'login' ? 'register' : 'login')}
                  style={{ color: '#3b82f6', background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, fontWeight: 500, padding: 0 }}>
                  {state === 'login' ? 'Sign up free' : 'Sign in'}
                </button>
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

                {state !== 'login' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontSize: 11, color: '#9ca3af', fontWeight: 500 }}>Full Name</label>
                    <div style={{ position: 'relative' }}>
                      <User2Icon size={13} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#d1d5db', pointerEvents: 'none' }} />
                      <input type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange}
                        style={{ width: '100%', paddingLeft: 36, paddingRight: 16, paddingTop: 10, paddingBottom: 10, fontSize: 13, color: '#0f172a', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 12, outline: 'none', fontFamily: 'Poppins, sans-serif' }} />
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: 11, color: '#9ca3af', fontWeight: 500 }}>Email</label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={13} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#d1d5db', pointerEvents: 'none' }} />
                    <input type="email" name="email" placeholder="you@email.com" value={formData.email} onChange={handleChange}
                      style={{ width: '100%', paddingLeft: 36, paddingRight: 16, paddingTop: 10, paddingBottom: 10, fontSize: 13, color: '#0f172a', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 12, outline: 'none', fontFamily: 'Poppins, sans-serif' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label style={{ fontSize: 11, color: '#9ca3af', fontWeight: 500 }}>Password</label>
        {state === 'login' && <span style={{ fontSize: 11, color: '#3b82f6', cursor: 'pointer' }}>Forgot password?</span>}
</div>
                  <div style={{ position: 'relative' }}>
                    <Lock size={13} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#d1d5db', pointerEvents: 'none' }} />
                    <input type="password" name="password" placeholder="••••••••" value={formData.password} onChange={handleChange}
                      style={{ width: '100%', paddingLeft: 36, paddingRight: 16, paddingTop: 10, paddingBottom: 10, fontSize: 13, color: '#0f172a', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 12, outline: 'none', fontFamily: 'Poppins, sans-serif' }} />
                  </div>
                </div>

                <button onClick={handleSubmit} style={{
                  width: '100%', marginTop: 4, padding: '11px 0', background: '#3b82f6',
                  color: 'white', fontSize: 13, fontWeight: 500, borderRadius: 12,
                  border: 'none', cursor: 'pointer', boxShadow: '0 4px 14px rgba(59,130,246,0.3)',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {state === 'login' ? 'Sign in →' : 'Create account →'}
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0' }}>
                <div style={{ flex: 1, height: 1, background: '#f1f5f9' }} />
                <span style={{ fontSize: 11, color: '#d1d5db' }}>or continue with</span>
                <div style={{ flex: 1, height: 1, background: '#f1f5f9' }} />
              </div>

              <div style={{ display: 'flex', gap: 10 }}>
                {[
                  { label: 'Google', icon: <svg width="14" height="14" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg> },
                  { label: 'GitHub', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="#374151"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg> },
                ].map((s, i) => (
                  <button key={i} style={{
                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    padding: '10px 0', borderRadius: 12, border: '1px solid #e5e7eb', background: '#f9fafb',
                    cursor: 'pointer', fontSize: 12, color: '#4b5563', fontWeight: 500, fontFamily: 'Poppins, sans-serif'
                  }}>
                    {s.icon} {s.label}
                  </button>
                ))}
              </div>
            </div>

            <p style={{ textAlign: 'center', marginTop: 20, fontSize: 11, color: '#9ca3af' }}>
              By continuing, you agree to our{' '}
              <span style={{ color: '#3b82f6', cursor: 'pointer' }}>Terms</span>{' & '}
              <span style={{ color: '#3b82f6', cursor: 'pointer' }}>Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
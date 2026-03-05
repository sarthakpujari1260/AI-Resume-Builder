import { Lock, Mail, User2Icon } from 'lucide-react'
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
        * { font-family: 'Poppins', sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
        body { background: linear-gradient(135deg, #f0f7ff 0%, #e8f4fd 50%, #f0f9ff 100%) !important; }
        input:focus { border-color: #3b82f6 !important; background: white !important; }
      `}</style>

      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ width: '100%', maxWidth: 400 }}>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <a href="/"><img src={logo} alt="logo" style={{ height: 34 }} /></a>
          </div>

          <div style={{ background: 'white', borderRadius: 24, border: '1px solid #e8f0fe', boxShadow: '0 8px 40px rgba(37,99,235,0.08)', padding: '32px 28px' }}>

            <h1 style={{ fontSize: 20, fontWeight: 600, color: '#0f172a', marginBottom: 4 }}>
              {state === 'login' ? 'Welcome back' : 'Create your account'}
            </h1>
            <p style={{ fontSize: 12, color: '#9ca3af', marginBottom: 24 }}>
              {state === 'login' ? 'Sign in to access your resumes.' : "Get started — it's completely free."}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

              {state !== 'login' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  <label style={{ fontSize: 11, color: '#6b7280', fontWeight: 500 }}>Full Name</label>
                  <div style={{ position: 'relative' }}>
                    <User2Icon size={13} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#d1d5db', pointerEvents: 'none' }} />
                    <input type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange}
                      style={{ width: '100%', paddingLeft: 34, paddingRight: 14, paddingTop: 9, paddingBottom: 9, fontSize: 13, color: '#0f172a', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 10, outline: 'none' }} />
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <label style={{ fontSize: 11, color: '#6b7280', fontWeight: 500 }}>Email</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={13} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#d1d5db', pointerEvents: 'none' }} />
                  <input type="email" name="email" placeholder="you@email.com" value={formData.email} onChange={handleChange}
                    style={{ width: '100%', paddingLeft: 34, paddingRight: 14, paddingTop: 9, paddingBottom: 9, fontSize: 13, color: '#0f172a', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 10, outline: 'none' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label style={{ fontSize: 11, color: '#6b7280', fontWeight: 500 }}>Password</label>
                  {state === 'login' && <span style={{ fontSize: 11, color: '#3b82f6', cursor: 'pointer' }}>Forgot password?</span>}
                </div>
                <div style={{ position: 'relative' }}>
                  <Lock size={13} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#d1d5db', pointerEvents: 'none' }} />
                  <input type="password" name="password" placeholder="••••••••" value={formData.password} onChange={handleChange}
                    style={{ width: '100%', paddingLeft: 34, paddingRight: 14, paddingTop: 9, paddingBottom: 9, fontSize: 13, color: '#0f172a', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 10, outline: 'none' }} />
                </div>
              </div>

              <button onClick={handleSubmit} style={{
                width: '100%', marginTop: 4, padding: '10px 0',
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                color: 'white', fontSize: 13, fontWeight: 500, borderRadius: 10,
                border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(59,130,246,0.25)'
              }}>
                {state === 'login' ? 'Sign in →' : 'Create account →'}
              </button>
            </div>

            <p style={{ textAlign: 'center', marginTop: 18, fontSize: 12, color: '#9ca3af' }}>
              {state === 'login' ? "Don't have an account? " : 'Already have an account? '}
              <button onClick={() => setState(s => s === 'login' ? 'register' : 'login')}
                style={{ color: '#3b82f6', background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, fontWeight: 500, padding: 0 }}>
                {state === 'login' ? 'Sign up' : 'Sign in'}
              </button>
            </p>

          </div>
        </div>
      </div>
    </>
  )
}
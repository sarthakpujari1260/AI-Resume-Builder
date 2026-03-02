import { Lock, Mail, User2Icon } from 'lucide-react'
import React from 'react'
import api from '../configs/api'
import { useDispatch } from 'react-redux'
import { login } from '../app/features/authSlice'
import toast from 'react-hot-toast'

const Login = () => {
  const dispatch = useDispatch()
  const query = new URLSearchParams(window.location.search)
  const urlState = query.get('state')
  const [state, setState] = React.useState(urlState || 'login')
  const [formData, setFormData] = React.useState({ name: '', email: '', password: '' })

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
      <div className="min-h-screen flex items-center justify-center px-4 bg-[#f0f7ff]">

        <div className="w-full max-w-sm bg-white rounded-3xl border border-gray-100 shadow-md px-8 py-10">

          {/* Logo */}
          <div className="flex justify-center mb-7">
            <a href="/">
              <img src="/logo.svg" alt="logo" className="h-8" />
            </a>
          </div>

          {/* Title */}
          <h1 className="text-center text-[20px] font-semibold text-black mb-1">
            {state === 'login' ? 'Welcome back' : 'Create your account'}
          </h1>
          <p className="text-center text-[12px] text-gray-400 mb-7">
            {state === 'login' ? 'Sign in to access your resumes.' : "Get started — it's completely free."}
          </p>

          {/* Form */}
          <div className="flex flex-col gap-4">

            {state !== 'login' && (
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] text-gray-400 font-medium ml-0.5">Full Name</label>
                <div className="relative">
                  <User2Icon size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-9 pr-4 py-2.5 text-[13px] text-black bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-400 focus:bg-white transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] text-gray-400 font-medium ml-0.5">Email</label>
              <div className="relative">
                <Mail size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-9 pr-4 py-2.5 text-[13px] text-black bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-400 focus:bg-white transition-all placeholder:text-gray-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label className="text-[11px] text-gray-400 font-medium ml-0.5">Password</label>
                {state === 'login' && (
                  <span className="text-[11px] text-blue-400 cursor-pointer hover:underline">Forgot password?</span>
                )}
              </div>
              <div className="relative">
                <Lock size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-9 pr-4 py-2.5 text-[13px] text-black bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-400 focus:bg-white transition-all placeholder:text-gray-300"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full mt-1 py-2.5 bg-blue-500 hover:bg-blue-600 active:scale-95 transition-all text-white text-[13px] font-medium rounded-xl cursor-pointer border-none"
            >
              {state === 'login' ? 'Sign in' : 'Create account'}
            </button>

          </div>

          {/* Switch state */}
          <p className="text-center mt-5 text-[12px] text-gray-400">
            {state === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setState(prev => prev === 'login' ? 'register' : 'login')}
              className="text-blue-500 hover:underline bg-transparent border-none cursor-pointer text-[12px] p-0 font-medium"
            >
              {state === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </p>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
        body { background: #f0f7ff !important; }
      `}</style>
    </>
  )
}

export default Login
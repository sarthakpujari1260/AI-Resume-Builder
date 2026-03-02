import React, { useState } from 'react'
import logo from "../../assets/logo.svg"

const Footer = () => {
  const [showSupport, setShowSupport] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="py-6 px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-r from-[#f0f7ff] via-[#e8f4fd] to-[#f0f9ff] border-t border-blue-100 mt-40">

        <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
          <img src={logo} alt="Resumefy" className="h-10 cursor-pointer" onClick={scrollToTop} />
          <p className="text-[12px] text-gray-700 italic hidden md:block">Because every ambition deserves to be noticed.</p>
          <div className="flex items-center gap-5 text-[12px] text-gray-700">
            <a href="/" className="hover:text-blue-600 transition-colors duration-200">Home</a>
            <span className="text-gray-300">|</span>
            <button onClick={() => setShowSupport(true)} className="hover:text-blue-600 transition-colors duration-200 bg-transparent border-none text-[12px] text-gray-700 p-0 cursor-pointer">Support</button>
            <span className="text-gray-300">|</span>
            <a href="https://x.com/Vvishal_Parihar" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-blue-500 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-blue-100 pt-3 text-center">
          <p className="text-[11px] text-gray-500">© {new Date().getFullYear()} Resumefy. All rights reserved.</p>
        </div>

      </footer>

      {showSupport && (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)' }} onClick={() => setShowSupport(false)}>
          <div className="bg-white rounded-2xl shadow-xl px-10 py-8 max-w-sm w-full mx-4 text-center" onClick={(e) => e.stopPropagation()}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#eff6ff' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <h2 className="text-[15px] font-semibold text-gray-800 mb-2">Support</h2>
            <p className="text-[13px] text-gray-500 leading-relaxed">For any queries, mail us at:</p>
            <a href="mailto:vishalparihar1008@gmail.com" className="text-[13px] font-medium text-blue-600 hover:underline mt-1 block">vishalparihar1008@gmail.com</a>
            <button onClick={() => setShowSupport(false)} className="mt-6 px-6 py-2 text-white text-[12px] rounded-full cursor-pointer" style={{ backgroundColor: '#3b82f6' }}>Got it</button>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>
    </>
  )
}

export default Footer
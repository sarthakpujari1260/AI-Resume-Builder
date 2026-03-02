import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg"

const Hero = () => {

    const {user} = useSelector(state => state.auth)
    const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
    <div className="min-h-screen pb-0">
        {/* Navbar */}
        <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
            <a href="/">
                <img src={logo} alt="logo" className="h-11 w-auto"/>
            </a>

            <div className="hidden md:flex items-center gap-8 transition duration-500 text-black">
                <a href="#" className="hover:text-blue-600 transition">Home</a>
                <a href="#features" className="hover:text-blue-600 transition">Features</a>
                <a href="#cta" className="hover:text-blue-600 transition">Contact</a>
            </div>

            <div className="flex gap-2">
                <Link to='/app?state=register' className="hidden md:block px-6 py-2 bg-blue-500 hover:bg-blue-700 active:scale-95 transition-all rounded-full text-white" hidden={user}>
                    Get started
                </Link>
                <Link to='/app?state=login' className="hidden md:block px-6 py-2 border border-slate-300 active:scale-95 hover:bg-slate-50 transition-all rounded-full text-black hover:text-black" hidden={user}>
                    Login
                </Link>
                <Link to='/app' className='hidden md:block px-8 py-2 bg-blue-500 hover:bg-blue-700 active:scale-95 transition-all rounded-full text-white' hidden={!user}>
                    Dashboard
                </Link>
            </div>

            <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-menu">
                    <path d="M4 5h16M4 12h16M4 19h16" />
                </svg>
            </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-[100] bg-blue-900/90 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <a href="#" className="text-white">Home</a>
            <a href="#features" className="text-white">Features</a>
            <a href="#cta" className="text-white">Contact</a>
            <button onClick={() => setMenuOpen(false)} className="aspect-square size-10 p-1 items-center justify-center bg-blue-600 hover:bg-blue-700 transition text-white rounded-md flex">
                X
            </button>
        </div>

        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-40 text-black pt-16">

            {/* Glow blobs */}
            <div className="absolute top-10 -z-10 left-1/4 size-72 sm:size-96 bg-blue-200 blur-[120px] opacity-40"></div>
            <div className="absolute top-0 -z-10 right-1/4 size-60 bg-sky-100 blur-[120px] opacity-30"></div>

            {/* Badge */}
            <div className="mb-6 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-black text-[12px] font-medium tracking-wide">
                ✦ AI-Powered Resume Builder
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-semibold max-w-3xl text-center md:leading-[72px] text-black">
                Your skills are great.{" "}
                <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
                    Your resume should be too.
                </span>
            </h1>

            {/* Subtext */}
            <p className="max-w-sm text-center text-[15px] mt-5 mb-8 text-black leading-relaxed">
                Let AI close the gap between you and your dream job.
            </p>

            {/* CTA */}
            <Link to='/app' className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-10 h-12 ring-offset-2 ring-1 ring-blue-300 flex items-center gap-2 transition-colors text-[14px]">
                Get started
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>

            {/* Simple process */}
            <div className="flex items-center gap-3 mt-8 pb-0 text-[12px] text-black">
                <span>✦ Ready in minutes</span>
                <span className="text-slate-300">|</span>
                <span>✦ Free to start</span>
            </div>

        </div>
    </div>

    <style>
        {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
            * { font-family: 'Poppins', sans-serif; }
            body { background: linear-gradient(135deg, #f0f7ff 0%, #e8f4fd 50%, #f0f9ff 100%); }
        `}
    </style>
    </>
  )
}

export default Hero
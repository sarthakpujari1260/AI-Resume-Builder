import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div id='cta' className='border-y border-dashed border-slate-200 w-full max-w-5xl mx-auto px-10 sm:px-16 mt-28 mb-0'>
        <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-slate-200 py-16 sm:py-20 -mt-10 -mb-10 w-full">

            <div className="flex flex-col gap-2">
                <p className="text-2xl font-semibold max-w-md text-black">
                    Your next opportunity is one resume away.
                </p>
                <p className="text-[13px] text-black">
                    Build it in minutes. Let AI do the heavy lifting.
                </p>
            </div>

            <Link to='/app' className="flex items-center gap-2 rounded-full py-2.5 px-6 bg-blue-500 hover:bg-blue-600 active:scale-95 transition-all text-white text-[13px] whitespace-nowrap">
                <span>Create My Resume Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>

        </div>
    </div>
  )
}

export default CallToAction
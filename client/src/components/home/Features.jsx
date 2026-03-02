import { Zap } from 'lucide-react';
import React from 'react'
import Title from './Title';
import resumePic from '../../assets/resume-pic.png'

const Features = () => {
    const [isHover, setIsHover] = React.useState(false);

  return (
    <div id='features' className='flex flex-col items-center mt-4 scroll-mt-12'>

        {/* Badge */}
        <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-400/10 rounded-full px-6 py-1.5">
            <Zap width={14}/>
            <span>Simple Process</span>
        </div>

        <Title title='Build your resume' description='Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features.'/>

        <div className="flex flex-col md:flex-row items-center gap-10 xl:gap-16 mt-10 px-4 md:px-10 lg:px-16 w-full max-w-6xl">

            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-100 blur-[60px] opacity-60 rounded-3xl -z-10"></div>
                    <img
                        src={resumePic}
                        alt="Resume Preview"
                        className="w-full max-w-md rounded-2xl shadow-xl border border-slate-100 object-cover"
                    />
                </div>
            </div>

            <div
                className="w-full md:w-1/2 flex flex-col gap-3"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}>
 
                <div className={`group flex items-start gap-5 p-5 rounded-2xl border cursor-pointer transition-all duration-200 ${!isHover ? 'bg-violet-50 border-violet-200' : 'border-transparent hover:bg-violet-50 hover:border-violet-200'}`}>
                    <div className="p-2.5 bg-violet-100 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-violet-600">
                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-[14px] font-semibold text-black">AI-Powered Suggestions</h3>
                        <p className="text-[13px] text-black mt-1 leading-relaxed max-w-xs">Get smart content suggestions tailored to your job role and experience.</p>
                    </div>
                </div>
      
                <div className="group flex items-start gap-5 p-5 rounded-2xl border border-transparent cursor-pointer transition-all duration-200 hover:bg-blue-50 hover:border-blue-200">
                    <div className="p-2.5 bg-blue-100 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-blue-600">
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-[14px] font-semibold text-black">Easy Editing</h3>
                        <p className="text-[13px] text-black mt-1 leading-relaxed max-w-xs">Edit every section of your resume with a clean, intuitive interface.</p>
                    </div>
                </div>

        <div className="group flex items-start gap-5 p-5 rounded-2xl border border-transparent cursor-pointer transition-all duration-200 hover:bg-blue-50 hover:border-blue-200">
            <div className="p-2.5 bg-blue-100 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-blue-600">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
            <polyline points="14 2 14 8 20 8"/>
            <path d="M12 18v-6"/>
            <path d="m9 15 3 3 3-3"/>
        </svg>
    </div>
    <div>
        <h3 className="text-[14px] font-semibold text-black">Download Instantly</h3>
        <p className="text-[13px] text-black mt-1 leading-relaxed max-w-xs">Export your resume as a polished, recruiter-ready PDF in one click.</p>
    </div>
    </div>
    </div>
    </div>

        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
            * { font-family: 'Poppins', sans-serif; }
        `}</style>
    </div>
  )
}

export default Features
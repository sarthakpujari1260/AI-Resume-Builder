import React from 'react'

const featureData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 8v4l3 3"/><path d="M18.5 2.5 22 6"/><path d="m22 2.5-3.5 3.5"/></svg>
    ),
    color: '#818cf8',
    bg: 'rgba(129,140,248,0.1)',
    border: 'rgba(129,140,248,0.2)',
    title: 'AI-Enhanced Content',
    desc: 'Our AI analyzes your experience and rewrites it with powerful, results-driven language that grabs attention.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>
    ),
    color: '#34d399',
    bg: 'rgba(52,211,153,0.1)',
    border: 'rgba(52,211,153,0.2)',
    title: 'Professional Templates',
    desc: 'Choose from 4 polished templates — Classic, Modern, Minimal, and Minimal Image — designed to impress.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
    ),
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.1)',
    border: 'rgba(251,146,60,0.2)',
    title: 'Upload Existing Resume',
    desc: 'Already have a resume? Upload your PDF and our AI will parse and restructure it into a polished format.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
    ),
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.1)',
    border: 'rgba(244,114,182,0.2)',
    title: 'Shareable Public Link',
    desc: 'Share your resume with a single link. Recruiters can view it instantly — no downloads or signups needed.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
    ),
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.1)',
    border: 'rgba(34,211,238,0.2)',
    title: 'One-Click PDF Download',
    desc: 'Download a print-ready PDF instantly. Perfectly formatted for ATS systems and human recruiters alike.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/></svg>
    ),
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.1)',
    border: 'rgba(167,139,250,0.2)',
    title: 'Background Removal',
    desc: 'Upload your photo and we use ImageKit AI to remove the background — giving you a clean, professional headshot.',
  },
]

const Features = () => {
  return (
    <section id="features" style={{
      background: '#0d0d14',
      padding: '100px 48px',
      fontFamily: "'DM Sans', sans-serif",
      scrollMarginTop: '60px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(34,197,94,0.1)',
            border: '1px solid rgba(34,197,94,0.2)',
            color: '#4ade80',
            padding: '6px 16px',
            borderRadius: '100px',
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.03em',
            marginBottom: '20px',
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m13 2-2 2.5h3L12 7"/><path d="M10 14v-3"/><path d="M14 14v-3"/><path d="M11 19H6.5a3.5 3.5 0 0 1 0-7H13"/><path d="M17.5 12H22a2 2 0 0 1 0 4h-1"/><path d="M15 19a2 2 0 1 0 4 0v-3h-4z"/></svg>
            Everything you need
          </div>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(30px, 4vw, 46px)',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
            margin: '0 0 16px',
          }}>
            Build your resume<br />
            <span style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #86efac 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>smarter, faster.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '16px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
            Our AI-powered toolkit handles the hard parts so you can focus on landing the interview.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}>
          {featureData.map((f, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              padding: '28px',
              transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.borderColor = f.border
              e.currentTarget.style.boxShadow = `0 8px 40px rgba(0,0,0,0.3)`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              <div style={{
                width: '46px', height: '46px',
                background: f.bg,
                border: `1px solid ${f.border}`,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: f.color,
                marginBottom: '18px',
              }}>
                {f.icon}
              </div>
              <h3 style={{ color: '#fff', fontSize: '16px', fontWeight: 600, margin: '0 0 10px', fontFamily: "'Sora', sans-serif", letterSpacing: '-0.01em' }}>
                {f.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', lineHeight: 1.65, margin: 0, fontWeight: 300 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

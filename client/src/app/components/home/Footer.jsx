import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" style={{
      background: '#0a0a0f',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      padding: '60px 48px 40px',
      fontFamily: "'DM Sans', sans-serif",
      color: 'rgba(255,255,255,0.4)',
      fontSize: '14px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px', marginBottom: '48px' }}>

          <div style={{ maxWidth: '260px' }}>
            <img src="/logo.svg" alt="logo" style={{ height: '32px', filter: 'brightness(0) invert(1)', marginBottom: '16px' }} />
            <p style={{ lineHeight: 1.7, fontSize: '13px' }}>
              Build professional, AI-enhanced resumes in minutes. Get hired faster.
            </p>
            <div style={{ display: 'flex', gap: '14px', marginTop: '20px' }}>
              {[
                { href: 'https://x.com/', d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" },
                { href: 'https://www.linkedin.com/', path: true },
                { href: 'https://www.youtube.com/', yt: true },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.35)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#22c55e'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>
                  {s.yt ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                  ) : s.path ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={s.d}/></svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
            {[
              { title: 'Product', links: ['Home', 'Features', 'Pricing', 'Changelog'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies'] },
            ].map((col, i) => (
              <div key={i}>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, marginBottom: '14px', fontSize: '13px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{col.title}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="/" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#22c55e'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.25)',
        }}>
          <p>© 2025 Resume Builder. All rights reserved.</p>
          <p>Made with ♥ for job seekers everywhere.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

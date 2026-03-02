import React from 'react'

const Banner = () => {
  return (
    <div style={{
      width: '100%',
      padding: '10px 0',
      textAlign: 'center',
      background: 'linear-gradient(90deg, #0a0a0f 0%, #052e16 50%, #0a0a0f 100%)',
      borderBottom: '1px solid rgba(34,197,94,0.15)',
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '13px',
      color: 'rgba(255,255,255,0.55)',
      letterSpacing: '0.03em',
    }}>
      <span style={{
        background: 'rgba(34,197,94,0.15)',
        border: '1px solid rgba(34,197,94,0.3)',
        color: '#4ade80',
        padding: '2px 10px',
        borderRadius: '100px',
        fontSize: '11px',
        fontWeight: 600,
        marginRight: '10px',
        letterSpacing: '0.06em',
      }}>NEW</span>
      AI-powered resume enhancement is now live — try it free
    </div>
  )
}

export default Banner

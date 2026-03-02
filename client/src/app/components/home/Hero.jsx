import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { user } = useSelector(state => state.auth)
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <div className="hero-root">
        <nav className="hero-nav">
          <a href="/">
            <img src="/logo.svg" alt="logo" className="hero-logo" />
          </a>
          <div className="hero-nav-links">
            <a href="#" className="hero-nav-link">Home</a>
            <a href="#features" className="hero-nav-link">Features</a>
            <a href="#contact" className="hero-nav-link">Contact</a>
          </div>
          <div className="hero-nav-actions">
            {!user ? (
              <>
                <Link to='/app?state=register' className="btn-primary">Get started</Link>
                <Link to='/app?state=login' className="btn-ghost">Login</Link>
              </>
            ) : (
              <Link to='/app' className="btn-primary">Dashboard</Link>
            )}
          </div>
          <button onClick={() => setMenuOpen(true)} className="hero-hamburger">
            <span /><span /><span />
          </button>
        </nav>

        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <button onClick={() => setMenuOpen(false)} className="mobile-close">✕</button>
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            AI-Powered Resume Builder
          </div>

          <h1 className="hero-headline">
            Land your<br />
            <span className="hero-headline-accent">dream job</span><br />
            with AI resumes.
          </h1>

          <p className="hero-sub">
            Create, edit and download professional resumes with intelligent AI assistance in minutes.
          </p>

          <div className="hero-cta-row">
            <Link to='/app' className="hero-btn-main">
              Get started free
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <button className="hero-btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
              Watch demo
            </button>
          </div>

          <div className="hero-social-proof">
            <div className="avatar-stack">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" alt="u1" />
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="u2" />
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="u3" />
              <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="u4" />
            </div>
            <div>
              <div className="stars">★★★★★</div>
              <p className="proof-text">Loved by <strong>10,000+</strong> job seekers</p>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="resume-card card-1">
            <div className="rc-header" />
            <div className="rc-line long" />
            <div className="rc-line medium" />
            <div className="rc-line short" />
            <div className="rc-divider" />
            <div className="rc-line medium" />
            <div className="rc-line long" />
          </div>
          <div className="resume-card card-2">
            <div className="rc-header accent" />
            <div className="rc-line long" />
            <div className="rc-line medium" />
            <div className="rc-divider" />
            <div className="rc-line short" />
            <div className="rc-line long" />
            <div className="rc-line medium" />
          </div>
          <div className="hero-glow" />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        .hero-root {
          font-family: 'DM Sans', sans-serif;
          background: #0a0a0f;
          color: #f0f0f0;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }
        .hero-root::before {
          content: '';
          position: absolute;
          top: -20%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-root::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: -5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 48px;
          position: relative;
          z-index: 10;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .hero-logo { height: 36px; width: auto; filter: brightness(0) invert(1); }
        .hero-nav-links { display: flex; gap: 32px; }
        .hero-nav-link {
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          transition: color 0.2s;
          letter-spacing: 0.02em;
        }
        .hero-nav-link:hover { color: #fff; }
        .hero-nav-actions { display: flex; gap: 10px; align-items: center; }
        .btn-primary {
          background: #22c55e;
          color: #fff;
          padding: 9px 22px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          font-family: 'DM Sans', sans-serif;
        }
        .btn-primary:hover { background: #16a34a; transform: translateY(-1px); }
        .btn-ghost {
          color: rgba(255,255,255,0.65);
          padding: 9px 22px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 400;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.12);
          transition: all 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .btn-ghost:hover { color: #fff; border-color: rgba(255,255,255,0.28); background: rgba(255,255,255,0.05); }
        .hero-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .hero-hamburger span { display: block; width: 24px; height: 2px; background: #fff; border-radius: 2px; }
        .mobile-menu {
          position: fixed;
          inset: 0;
          background: rgba(10,10,15,0.97);
          backdrop-filter: blur(12px);
          z-index: 100;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 32px;
          font-size: 22px;
          transform: translateX(-100%);
          transition: transform 0.35s ease;
        }
        .mobile-menu.open { transform: translateX(0); }
        .mobile-menu a { color: #fff; text-decoration: none; font-family: 'Sora', sans-serif; font-weight: 600; }
        .mobile-close {
          background: #22c55e;
          border: none;
          color: #fff;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          font-size: 18px;
          cursor: pointer;
          margin-top: 12px;
        }
        .hero-content {
          max-width: 580px;
          padding: 90px 48px 90px;
          position: relative;
          z-index: 2;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(34,197,94,0.1);
          border: 1px solid rgba(34,197,94,0.25);
          color: #4ade80;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.03em;
          margin-bottom: 28px;
        }
        .badge-dot {
          width: 6px; height: 6px;
          background: #22c55e;
          border-radius: 50%;
          animation: bpulse 2s infinite;
        }
        @keyframes bpulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.5); }
        }
        .hero-headline {
          font-family: 'Sora', sans-serif;
          font-size: clamp(42px, 5.5vw, 66px);
          font-weight: 800;
          line-height: 1.07;
          letter-spacing: -0.03em;
          color: #fff;
          margin: 0 0 24px;
        }
        .hero-headline-accent {
          background: linear-gradient(135deg, #22c55e 0%, #86efac 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-sub {
          font-size: 17px;
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
          margin-bottom: 40px;
          font-weight: 300;
        }
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 52px;
          flex-wrap: wrap;
        }
        .hero-btn-main {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #22c55e;
          color: #fff;
          padding: 14px 28px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          font-family: 'Sora', sans-serif;
          transition: all 0.2s;
          box-shadow: 0 0 30px rgba(34,197,94,0.28);
        }
        .hero-btn-main:hover {
          background: #16a34a;
          transform: translateY(-2px);
          box-shadow: 0 4px 40px rgba(34,197,94,0.4);
        }
        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.55);
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 14px 24px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 400;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.2s;
        }
        .hero-btn-secondary:hover { color: #fff; border-color: rgba(255,255,255,0.22); background: rgba(255,255,255,0.08); }
        .hero-social-proof { display: flex; align-items: center; gap: 14px; }
        .avatar-stack { display: flex; }
        .avatar-stack img {
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 2px solid #0a0a0f;
          object-fit: cover;
          margin-left: -8px;
        }
        .avatar-stack img:first-child { margin-left: 0; }
        .stars { color: #fbbf24; font-size: 13px; letter-spacing: 2px; }
        .proof-text { font-size: 13px; color: rgba(255,255,255,0.45); margin-top: 3px; }
        .proof-text strong { color: rgba(255,255,255,0.75); }
        .hero-visual {
          position: absolute;
          right: 8%;
          top: 50%;
          transform: translateY(-42%);
          z-index: 1;
          pointer-events: none;
        }
        .resume-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 20px;
          width: 220px;
          backdrop-filter: blur(8px);
        }
        .card-1 { transform: rotate(-4deg) translateX(-20px); margin-bottom: -40px; opacity: 0.6; }
        .card-2 {
          transform: rotate(2deg);
          position: relative;
          z-index: 2;
          width: 240px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .rc-header { height: 8px; width: 70%; background: rgba(255,255,255,0.14); border-radius: 4px; margin-bottom: 12px; }
        .rc-header.accent { background: #22c55e; width: 55%; }
        .rc-line { height: 5px; background: rgba(255,255,255,0.07); border-radius: 3px; margin-bottom: 8px; }
        .rc-line.long { width: 100%; }
        .rc-line.medium { width: 75%; }
        .rc-line.short { width: 50%; }
        .rc-divider { height: 1px; background: rgba(255,255,255,0.06); margin: 14px 0; }
        .hero-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(34,197,94,0.14) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(20px);
        }
        @media (max-width: 900px) {
          .hero-visual { display: none; }
          .hero-nav-links { display: none; }
          .hero-nav-actions { display: none; }
          .hero-hamburger { display: flex; }
          .hero-content { padding: 60px 24px; }
          .hero-nav { padding: 16px 24px; }
        }
        @media (max-width: 480px) {
          .hero-headline { font-size: 38px; }
        }
      `}</style>
    </>
  )
}

export default Hero

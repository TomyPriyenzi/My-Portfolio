import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [visible, setVisible] = useState(true);
  const [displayedRole, setDisplayedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const lastScrollY = useRef(0);

  const roles = [t.nav.role1, t.nav.role2, t.nav.role3];

  // Scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY.current || currentY < 50);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;
    if (!isDeleting) {
      if (displayedRole.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayedRole.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedRole(displayedRole.slice(0, -1));
        }, 50);
      } else {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex, roles]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${visible ? 'navbar--visible' : 'navbar--hidden'}`}>
      <div className="navbar__role">
        <span className="navbar__typewriter">{displayedRole}</span>
        <span className="navbar__cursor">|</span>
      </div>
      <div className="navbar__links">
        <button className="nav-link" onClick={() => scrollTo('hero')}>
          <span className="nav-link__num">01</span>{t.nav.inicio}
        </button>
        <button className="nav-link" onClick={() => scrollTo('skills')}>
          <span className="nav-link__num">02</span>{t.nav.habilidades}
        </button>
        <button className="nav-link" onClick={() => scrollTo('projects')}>
          <span className="nav-link__num">03</span>{t.nav.proyectos}
        </button>
        <button className="nav-link" onClick={() => scrollTo('contact')}>
          <span className="nav-link__num">04</span>{t.nav.contacto}
        </button>
        <button className="nav-link nav-link--lang" onClick={toggleLang}>
          <img
            src={lang === 'es'
              ? 'https://flagcdn.com/w40/ar.png'
              : 'https://flagcdn.com/w40/us.png'
            }
            alt={lang === 'es' ? 'Argentina' : 'USA'}
            className="nav-link__flag"
          />
          {lang.toUpperCase()}
        </button>
      </div>
    </nav>
  );
}

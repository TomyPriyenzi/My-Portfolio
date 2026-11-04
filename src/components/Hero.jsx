import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <div
          className={`hero__name-line ${mounted ? 'hero__name-line--visible' : ''}`}
          style={{ '--delay': '0s' }}
        >
          <h1 className="hero__firstname">Tomas</h1>
        </div>
        <div className="hero__lastname-row">
          <div
            className={`hero__name-line ${mounted ? 'hero__name-line--visible' : ''}`}
            style={{ '--delay': '0.15s' }}
          >
            <h1 className="hero__lastname">Priyenzi</h1>
          </div>
          <div
            className={`hero__location-line ${mounted ? 'hero__location-line--visible' : ''}`}
            style={{ '--delay': '0.35s' }}
          >
            <div className="hero__location">
              <span className="hero__dot-container">
                <span className="hero__dot-ping" />
                <span className="hero__dot" />
              </span>
              <span className="hero__location-text">{t.hero.location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <span className="hero__scroll-text">scroll</span>
        <span className="hero__scroll-arrow">↓</span>
      </div>
    </section>
  );
}

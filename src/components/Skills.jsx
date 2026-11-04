import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Skills.css';

function SkillItem({ number, title, tech, direction }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`skill-item skill-item--${direction} ${visible ? 'skill-item--visible' : ''}`}
      style={{ textAlign: direction === 'right' ? 'right' : 'left' }}
    >
      <div className="skill-item__title">
        <span className="skill-item__number">{number} — </span>
        {title}
      </div>
      <div className="skill-item__tech">{tech}</div>
    </div>
  );
}

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="skills">
      <SkillItem
        number="01"
        title={t.skills.title1}
        tech={t.skills.tech1}
        direction="left"
      />
      <SkillItem
        number="02"
        title={t.skills.title2}
        tech={t.skills.tech2}
        direction="right"
      />
      <SkillItem
        number="03"
        title={t.skills.title3}
        tech={t.skills.tech3}
        direction="left"
      />
    </section>
  );
}

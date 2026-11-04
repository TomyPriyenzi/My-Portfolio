import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const socialLinks = [
  { key: 'github', href: 'https://github.com/tomaspriyenzi', icon: '↗' },
  { key: 'gmail', href: 'mailto:tomaspriyenzi@gmail.com', icon: '↗' },
  { key: 'instagram', href: 'https://instagram.com/tomaspriyenzi', icon: '↗' },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact">
      <div className="contact__content">
        <h2 className="contact__heading">{t.contact.heading}</h2>
        <p className="contact__subheading">{t.contact.subheading}</p>
        <p className="contact__implement">{t.contact.implement}</p>
        <div className="contact__links">
          {socialLinks.map(({ key, href, icon }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              {t.contact[key]}
              <span className="contact__link-icon">{icon}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="contact__tomy" aria-hidden="true">TOMY</div>
    </section>
  );
}

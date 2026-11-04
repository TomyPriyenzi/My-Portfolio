import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">
        {t.projects.sectionTitle.toUpperCase()}
      </h2>
      <div className="projects__stack">
        {t.projects.items.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{
              '--card-index': index,
              top: `${90 + index * 32}px`
            }}
          >
            <div className="project-card__image">
              <span className="project-card__image-placeholder">imagen descriptiva</span>
            </div>
            <div className="project-card__info">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__tech">
                {project.tech.map((tag, i) => (
                  <span key={i} className="project-card__tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

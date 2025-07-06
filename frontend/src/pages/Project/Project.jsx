import { CtaSection } from '../../components/ui/CtaSection';
import { BreadCrumb } from '../../components/ui/BreadCrumb';
import { getProjectById } from '../../utils/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Project = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const data = await getProjectById(projectId);
        setProject(data);
      } catch (err) {
        setError(err.message);
        console.error('Помилка завантаження проекту:', err);
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      loadProject();
    }
  }, [projectId]);

  const combineFeatures = project
    ? [project.style, ...(project.tags || [])]
    : [];

  return (
    <div className="page project-page">
      <div className="container">
        {project && (
          <article className="project-content">
            <BreadCrumb
              items={[
                { title: 'Головна', href: '/' },
                { title: 'Портфоліо', href: '/projects' },
                { title: project.name },
              ]}
            />
            <section className="project-page__top grid">
              <div className="project-details grid--onDesktop-1-5">
                <h1 className="project-title h1--medium">{project.name}</h1>
                <ul className="project-features-list">
                  {combineFeatures.map((item, index) => (
                    <li className="project-feature" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="project-description">
                  {project.full_description}
                </div>
              </div>
              <div
                className="project__main-poster bg-image grid--onDesktop-7-12"
                style={{
                  backgroundImage: `url(${project.main_image})`,
                }}
              ></div>
            </section>
            {project && (
              <section className="project-gallery">
                <ul className="project-gallery__list">
                  {project.gallery.map((item, index) => (
                    <li
                      className="project-gallery__item bg-image"
                      key={index}
                      style={{
                        backgroundImage: `url(${item})`,
                      }}
                    ></li>
                  ))}
                </ul>
              </section>
            )}
          </article>
        )}
      </div>
      <CtaSection />
    </div>
  );
};

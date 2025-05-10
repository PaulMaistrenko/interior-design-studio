import { useParams } from 'react-router-dom';
import { Breadcrumb } from '../../components/UI/Breadcrumb';

export const ProjectPage = () => {
  const { projectSlug } = useParams();
  const formattedTitle = projectSlug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="page project-page">
      <div className="project-page__top"></div>
      <div className="project-page__gallery">
        <div className="container">
          <Breadcrumb
            items={[
              { title: 'Головна', href: '/' },
              { title: 'Портфоліо', href: '/projects' },
              { title: formattedTitle, href: `/projects/${projectSlug}` },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

import { useParams } from 'react-router-dom';
import { Breadcrumb } from '../../components/UI/Breadcrumb';
import { ProjectsCta } from '../../components/ProjectsCta';
import mainPoster from '../../assets/images/project-page/soft-minimal/main-poster.png';

export const ProjectPage = () => {
  const { projectSlug } = useParams();
  const formattedTitle = projectSlug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="page project-page">
      <div className="container">
        <Breadcrumb
          items={[
            { title: 'Головна', href: '/' },
            { title: 'Портфоліо', href: '/projects' },
            { title: formattedTitle, href: `/projects/${projectSlug}` },
          ]}
        />
        <div className="project-page__top grid">
          <div className="project-info grid--onDesktop-1-5">
            <h1 className="project__title h1--medium">Soft Minimal</h1>
            <div className="project-attributes">
              <p className="project-attribute">Мінімалізм</p>
              <div className="project-attribute__separator bg-image">|</div>
              <p className="project-attribute">Скандинавський стиль</p>
              <div className="project-attribute__separator bg-image">|</div>
              <p className="project-attribute">Спальня</p>
            </div>
            <article className="project__description">
              Ця квартира втілює сучасний мінімалізм завдяки лаконічним формам,
              світлій колірній гамі та функціональним меблям. Кожен елемент
              інтер&#39;єру підкреслює простоту та елегантність, створюючи
              відчуття простору та спокою. Додавання елементів скандинавського
              стилю привносить в інтер&#39;єр затишок та природність.
            </article>
          </div>
          <img
            src={mainPoster}
            alt="soft minimal"
            className="project__main-image"
          />
        </div>
        <ul className="project-page__gallery-list grid">
          <li className="project-page__gallery-item bg-image gallery-item-1 grid--onDesktop-1-6"></li>
          <li className="project-page__gallery-item bg-image gallery-item-2 grid--onDesktop-7-12"></li>
          <li className="project-page__gallery-item bg-image gallery-item-3 grid--onDesktop-1-6"></li>
          <li className="project-page__gallery-item bg-image gallery-item-4 grid--onDesktop-7-12"></li>
          <li className="project-page__gallery-item bg-image gallery-item-5 grid--onDesktop-1-6"></li>
          <li className="project-page__gallery-item bg-image gallery-item-6 grid--onDesktop-7-12"></li>
        </ul>
      </div>
      <ProjectsCta />
    </div>
  );
};

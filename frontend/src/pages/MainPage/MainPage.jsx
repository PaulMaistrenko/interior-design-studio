import { Link } from 'react-router-dom';

export const MainPage = () => {
  return (
    <div className="page main-page">
      <section className="hero bg-image">
        <div className="container">
          <div className="hero-section__title">
            МИ СТВОРЮЄМО ІНТЕР’ЄРИ,
            <br /> В ЯКИХ ХОЧЕТЬСЯ ЖИТИ
          </div>
          <Link
            to="/contacts"
            className="hero-section__button button button--text"
          >
            Зв’язатися з нами
          </Link>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="about__top">
            <h4 className="about__title">Про нас</h4>
            <h1 className="about__tagline">“Наші корені — наша сила”</h1>
          </div>
          <div className="about__content">
            <div className="about__subtitle"></div>
            <div className="about__text"></div>
            <div className="about__poster-1"></div>
            <div className="about__poster-2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

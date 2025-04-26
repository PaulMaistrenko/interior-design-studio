import { Link } from 'react-router-dom';

export const MainPage = () => {
  return (
    <div className="page main-page">
      <section className="hero-section bg-image">
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
    </div>
  );
};

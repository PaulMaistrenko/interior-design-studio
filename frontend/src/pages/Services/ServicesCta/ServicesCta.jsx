import { Link } from 'react-router-dom';

export const ServicesCta = () => {
  return (
    <section className="services-cta">
      <div className="container">
        <div className="cta__content grid">
          <div className="cta__poster bg-image grid--onDesktop-1-6" />
          <h4 className="cta__title h4--bold grid--onDesktop-8-11">
            Розрахуй вартість свого дизайн-проєкту за 1 хвилину!
          </h4>
          <p className="cta__text grid--onDesktop-8-11">
            Заповни кілька простих питань і отримай:️ <br />
            Орієнтовну вартість
            <br /> Приклад повного дизайн-проєкту у PDF
            <br /> Можливість записатись на консультацію
          </p>
          <Link
            to="#"
            className="cta__button button primary-button button--text grid--onDesktop-9-11"
          >
            Розрахувати вартість
          </Link>
        </div>
      </div>
    </section>
  );
};

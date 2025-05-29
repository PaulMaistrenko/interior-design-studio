import { Link } from 'react-router-dom';

export const PortfolioCta = () => {
  return (
    <section className="projects-cta">
      <div className="container">
        <div className="cta__content grid">
          <div className="cta__poster bg-image grid--onDesktop-1-5" />
          <h1 className="cta__title h1--medium grid--onDesktop-7-12">
            Створіть дім своєї мрії
          </h1>
          <h4 className="cta__text h4--bold grid--onDesktop-7-12">
            Розкажіть нам про свій проєкт
          </h4>
          <Link
            to="/contacts"
            className="cta__button button primary-button button--text grid--onDesktop-10-12"
          >
            Зв’язатися з нами
          </Link>
        </div>
      </div>
    </section>
  );
};

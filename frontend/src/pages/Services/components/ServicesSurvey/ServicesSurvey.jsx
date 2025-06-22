export const ServicesSurvey = () => {
  return (
    <div className="services-survey__content grid">
      <div className="services-survey__poster bg-image grid--onDesktop-1-6"></div>
      <div className="services-survey__start-form grid--onDesktop-8-11">
        <h4 className="start-form__title h4--bold">
          Розрахуй вартість свого дизайн-проєкту за 1 хвилину!
        </h4>
        <div className="start-form__text">
          Заповни кілька простих питань і отримай:
          <br />
          Орієнтовну вартість
          <br />
          Приклад повного дизайн-проєкту у PDF
          <br />
          Можливість записатись на консультацію
        </div>
        <button className="survey-start__button button button--text">
          Розрахувати вартість
        </button>
      </div>
    </div>
  );
};

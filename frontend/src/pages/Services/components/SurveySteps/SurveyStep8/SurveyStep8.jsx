import PropTypes from 'prop-types';

export const SurveyStep8 = ({ setCurrentSurveyStep }) => {
  return (
    <div className="survey-step survey-step-8">
      <h4 className="survey-step__title h4--bold">
        Давай творити разом. Напиши, як з тобою зв’язатися.
      </h4>
      <form className="survey-step-8__form-field">
        <input
          className="survey-step-8__input text-secondary--regular"
          type="text"
          id="name"
          name="name"
          placeholder="Ім'я*"
          required
        />

        <input
          className="survey-step-8__input text-secondary--regular"
          type="tel"
          id="phone"
          name="phone"
          placeholder="Телефон*"
          required
        />
        <button
          className="survey-step-8__button button button--text"
          type="submit"
          onClick={() => setCurrentSurveyStep(9)}
        >
          Відправити
        </button>
      </form>
    </div>
  );
};

SurveyStep8.propTypes = {
  setCurrentSurveyStep: PropTypes.func.isRequired,
};

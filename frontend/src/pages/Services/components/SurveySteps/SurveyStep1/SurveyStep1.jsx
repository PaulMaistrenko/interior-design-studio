import PropTypes from 'prop-types';

export const SurveyStep1 = ({ surveyStep1, formData, setFormData }) => {
  const handleChange = (e) => {
    const value = e.target.value;

    setFormData((prevData) => {
      const updatedAnswers = [...prevData.chosen_answers];
      updatedAnswers[0] = {
        question: surveyStep1.id,
        custom_answer: value,
      };

      return { ...prevData, chosen_answers: updatedAnswers };
    });
  };

  const inputValue = formData.chosen_answers?.[0]?.custom_answer || '';

  return (
    <div className="survey-step survey-step-1">
      <h4 className="survey-step__title h4--bold">{surveyStep1.text}</h4>
      <div className="survey-step-1__content">
        <form>
          <input
            type="text"
            name="area"
            placeholder="Вкажіть площу у м²"
            aria-label="Area"
            className="survey-step-1__input"
            value={inputValue}
            onChange={handleChange}
          />
        </form>
        <p className="survey-step-1__note">
          Мінімальна площа для розрахунку - 20 м²
        </p>
      </div>
    </div>
  );
};

SurveyStep1.propTypes = {
  surveyStep1: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

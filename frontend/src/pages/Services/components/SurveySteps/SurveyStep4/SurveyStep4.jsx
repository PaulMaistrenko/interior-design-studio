import PropTypes from 'prop-types';

export const SurveyStep4 = ({ surveyStep4, formData, setFormData }) => {
  const { text, choices } = surveyStep4;

  const handleChange = (e) => {
    const selectedOrder = Number(e.target.value);

    setFormData((prevData) => {
      const updatedAnswers = [...prevData.chosen_answers];
      updatedAnswers[3] = { option: selectedOrder };

      return { ...prevData, chosen_answers: updatedAnswers };
    });
  };

  const selectedValue = formData.chosen_answers?.[3]?.option ?? '';

  return (
    <div className="survey-step survey-step-2">
      <h4 className="survey-step__title h4--bold">{text}</h4>
      <ul className="survey-step-2__types-list">
        {choices?.map((item) => (
          <li className="survey-step-2__types-item" key={item.id}>
            <label>
              <input
                type="radio"
                name="projectType"
                className="survey-step-2__input"
                value={item.order}
                checked={selectedValue === item.order}
                onChange={handleChange}
              />
              {item.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

SurveyStep4.propTypes = {
  surveyStep4: PropTypes.shape({
    text: PropTypes.string.isRequired,
    choices: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        text: PropTypes.string.isRequired,
        order: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  formData: PropTypes.shape({
    chosen_answers: PropTypes.arrayOf(
      PropTypes.shape({
        option: PropTypes.number,
      })
    ).isRequired,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

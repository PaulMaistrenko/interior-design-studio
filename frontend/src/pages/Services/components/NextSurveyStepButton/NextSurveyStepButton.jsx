import PropTypes from 'prop-types';

export const NextSurveyStepButton = ({
  currentSurveyStep,
  setCurrentSurveyStep,
}) => {
  return (
    <button
      className="next-survey-step-button button button--text"
      onClick={() => setCurrentSurveyStep(currentSurveyStep + 1)}
    >
      <p>Далі</p>
    </button>
  );
};

NextSurveyStepButton.propTypes = {
  currentSurveyStep: PropTypes.number.isRequired,
  setCurrentSurveyStep: PropTypes.func.isRequired,
};

import { surveyStepsList } from '../../../../data/surveyStepsList';
import PropTypes from 'prop-types';

export const SurveyStatusBar = ({
  currentSurveyStep,
  setCurrentSurveyStep,
}) => {
  const handleSurveyStep = (direction) => {
    setCurrentSurveyStep((prev) => {
      if (direction === 'next' && prev < surveyStepsList.length)
        return prev + 1;
      if (direction === 'prev' && prev > 1) return prev - 1;
      return prev;
    });
  };

  return (
    <div className="survey-status-bar">
      <button
        className="survey-prev-step__button bg-image"
        onClick={() => handleSurveyStep('prev')}
      />
      <ul className="survey-steps-status__list">
        {surveyStepsList.map((_, i) => (
          <li
            key={i}
            className={`survey-steps-status__dot bg-image ${
              i + 1 === currentSurveyStep ? 'active' : ''
            }
            ${i + 1 < currentSurveyStep ? 'completed' : ''}`}
          />
        ))}
      </ul>
    </div>
  );
};

SurveyStatusBar.propTypes = {
  currentSurveyStep: PropTypes.number.isRequired,
  setCurrentSurveyStep: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';

export const SurveyList = ({ currentSurveyStep }) => {
  return <div className="survey-list">{currentSurveyStep}</div>;
};

SurveyList.propTypes = {
  currentSurveyStep: PropTypes.number.isRequired,
};

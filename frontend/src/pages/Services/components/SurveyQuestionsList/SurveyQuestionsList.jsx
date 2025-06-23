import PropTypes from 'prop-types';
import { SurveyStep1 } from '../SurveySteps/SurveyStep1';
import { SurveyStep2 } from '../SurveySteps/SurveyStep2';
import { SurveyStep3 } from '../SurveySteps/SurveyStep3';
import { SurveyStep4 } from '../SurveySteps/SurveyStep4';
import { SurveyStep5 } from '../SurveySteps/SurveyStep5';
import { SurveyStep6 } from '../SurveySteps/SurveyStep6';

export const SurveyQuestionsList = ({ currentSurveyStep }) => {
  switch (currentSurveyStep) {
    case 1:
      return <SurveyStep1 />;
    case 2:
      return <SurveyStep2 />;
    case 3:
      return <SurveyStep3 />;
    case 4:
      return <SurveyStep4 />;
    case 5:
      return <SurveyStep5 />;
    case 6:
      return <SurveyStep6 />;
    default:
      return;
  }
};

SurveyQuestionsList.propTypes = {
  currentSurveyStep: PropTypes.number.isRequired,
};

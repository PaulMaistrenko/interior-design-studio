import PropTypes from 'prop-types';
import { SurveyStep1 } from '../SurveySteps/SurveyStep1';
import { SurveyStep2 } from '../SurveySteps/SurveyStep2';
import { SurveyStep3 } from '../SurveySteps/SurveyStep3';
import { SurveyStep4 } from '../SurveySteps/SurveyStep4';
import { SurveyStep5 } from '../SurveySteps/SurveyStep5';
import { SurveyStep6 } from '../SurveySteps/SurveyStep6';
import { SurveyStep9 } from '../SurveySteps/SurveyStep9';
import { SurveyStep7 } from '../SurveySteps/SurveyStep7';
import { SurveyStep8 } from '../SurveySteps/SurveyStep8';

export const SurveyQuestionsList = ({
  currentSurveyStep,
  setCurrentSurveyStep,
}) => {
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
    case 7:
      return <SurveyStep7 />;
    case 8:
      return <SurveyStep8 setCurrentSurveyStep={setCurrentSurveyStep} />;
    case 9:
      return <SurveyStep9 />;
    default:
      return;
  }
};

SurveyQuestionsList.propTypes = {
  currentSurveyStep: PropTypes.number.isRequired,
  setCurrentSurveyStep: PropTypes.func.isRequired,
};

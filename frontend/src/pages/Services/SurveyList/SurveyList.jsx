import PropTypes from 'prop-types';
import { SurveyStep1 } from '../SurveySteps/SurveyStep-1';
import { SurveyStep2 } from '../SurveySteps/SurveyStep-2';
import { SurveyStep3 } from '../SurveySteps/SurveyStep-3';
import { SurveyStep4 } from '../SurveySteps/SurveyStep-4';
import { SurveyStep5 } from '../SurveySteps/SurveyStep-5';
import { SurveyStep6 } from '../SurveySteps/SurveyStep-6';
import { SurveyStep7 } from '../SurveySteps/SurveyStep-7';

export const SurveyList = ({ currentSurveyStep }) => {
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
    default:
      return;
  }
};

SurveyList.propTypes = {
  currentSurveyStep: PropTypes.number.isRequired,
};

import { useState } from 'react';
import { SurveyStartForm } from '../SurveyStartForm/SurveyStartForm';
import { SurveyQuestionsList } from '../SurveyQuestionsList';
import { SurveyStatusBar } from '../SurveyStatusBar';
import { NextSurveyStepButton } from '../NextSurveyStepButton';
import { ResultActions } from '../ResultActions';

export const ServicesSurvey = () => {
  const [isSurveyStarted, setIsSurveyStarted] = useState(false);
  const [currentSurveyStep, setCurrentSurveyStep] = useState(1);

  return (
    <div className="services-survey__content grid">
      <div className="services-survey__poster bg-image grid--onDesktop-1-6"></div>
      <div className="services-survey__info grid--onDesktop-8-11">
        {isSurveyStarted ? (
          <>
            {currentSurveyStep <= 8 && (
              <SurveyStatusBar
                currentSurveyStep={currentSurveyStep}
                setCurrentSurveyStep={setCurrentSurveyStep}
              />
            )}
            <SurveyQuestionsList currentSurveyStep={currentSurveyStep} />
            {currentSurveyStep < 6 ? (
              <NextSurveyStepButton
                currentSurveyStep={currentSurveyStep}
                setCurrentSurveyStep={setCurrentSurveyStep}
              />
            ) : (
              <ResultActions setCurrentSurveyStep={setCurrentSurveyStep} />
            )}
          </>
        ) : (
          <SurveyStartForm setIsSurveyStarted={setIsSurveyStarted} />
        )}
      </div>
    </div>
  );
};

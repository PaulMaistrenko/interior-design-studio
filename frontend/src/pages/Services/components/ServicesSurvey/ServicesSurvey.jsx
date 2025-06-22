import { useState } from 'react';
import { SurveyStartForm } from '../SurveyStartForm/SurveyStartForm';
import { SurveyQuestionsList } from '../SurveyQuestionsList';
import { SurveyStatusBar } from '../SurveyStatusBar';
import { NextSurveyStepButton } from '../NextSurveyStepButton';

export const ServicesSurvey = () => {
  const [isSurveyStarted, setIsSurveyStarted] = useState(false);
  const [currentSurveyStep, setCurrentSurveyStep] = useState(1);

  return (
    <div className="services-survey__content grid">
      <div className="services-survey__poster bg-image grid--onDesktop-1-6"></div>
      <div className="grid--onDesktop-8-11">
        {isSurveyStarted ? (
          <>
            <SurveyStatusBar
              currentSurveyStep={currentSurveyStep}
              setCurrentSurveyStep={setCurrentSurveyStep}
            />
            <SurveyQuestionsList />
            <NextSurveyStepButton setIsSurveyStarted={setIsSurveyStarted} />
          </>
        ) : (
          <SurveyStartForm setIsSurveyStarted={setIsSurveyStarted} />
        )}
      </div>
    </div>
  );
};

import { useState } from 'react';
import { SurveyList } from '../SurveyList/SurveyList';

export const ServicesCta = () => {
  const surveySteps = 7;
  const [currentSurveyStep, setCurrentSurveyStep] = useState(1);
  const [isSurveyListOpen, setIsSurveyListOpen] = useState(false);

  const handleSurveyStep = (direction) => {
    setCurrentSurveyStep((prev) => {
      if (direction === 'next' && prev < surveySteps) return prev + 1;
      if (direction === 'prev' && prev > 1) return prev - 1;
      return prev;
    });
  };

  return (
    <section className="services-cta">
      <div className="container">
        <div className="cta__content grid">
          <div className="cta__poster bg-image grid--onDesktop-1-6" />
          <div className="services-survey-block grid--onDesktop-8-12">
            {isSurveyListOpen ? (
              <>
                <div className="survey-status-bar">
                  <button
                    className="survey-prev-step__button bg-image"
                    onClick={() => handleSurveyStep('prev')}
                  />
                  <ul className="survey-steps-status__list">
                    {Array.from({ length: surveySteps }, (_, i) => (
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
                <SurveyList currentSurveyStep={currentSurveyStep} />
                <button
                  className="survey-next-step__button button primary-button button--text"
                  onClick={() => handleSurveyStep('next')}
                >
                  Далі
                </button>
              </>
            ) : (
              <>
                <h4 className="services-survey-block__title h4--bold">
                  Розрахуй вартість свого
                  <br /> дизайн-проєкту за 1 хвилину!
                </h4>
                <p className="services-survey-block__text">
                  Заповни кілька простих питань і отримай:️ <br />
                  Орієнтовну вартість
                  <br /> Приклад повного дизайн-проєкту у PDF
                  <br /> Можливість записатись на консультацію
                </p>
                <button
                  className="cta__button button primary-button button--text"
                  onClick={() => setIsSurveyListOpen(true)}
                >
                  Розрахувати вартість
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

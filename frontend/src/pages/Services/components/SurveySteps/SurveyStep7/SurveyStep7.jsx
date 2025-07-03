import { BonusInfo } from '../../BonusInfo';

export const SurveyStep7 = () => {
  return (
    <div className="survey-step survey-step-7">
      <h4 className="survey-step__title h4--bold">
        Результат розрахунку проекту
      </h4>
      <h1 className="result__title h1--bold">від 1700 $</h1>
      <BonusInfo />
      <p className="survey-step-7__secondary-text text-secondary--regular">
        Бажаєш обговорити проєкт? Запишись на консультацію
      </p>
    </div>
  );
};

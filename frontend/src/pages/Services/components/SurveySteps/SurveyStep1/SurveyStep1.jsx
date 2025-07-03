import { surveyStepsList } from '../../../../../data/surveyStepsList';

export const SurveyStep1 = () => {
  return (
    <div className="survey-step survey-step-1">
      <h4 className="survey-step__title h4--bold">
        {surveyStepsList[0].title}
      </h4>
      <div className="survey-step-1__content">
        <form>
          <input
            type="text"
            name="area"
            placeholder="Вкажіть площу у м²"
            aria-label="Area"
            className="survey-step-1__input"
          />
        </form>
        <p className="survey-step-1__note">
          Мінімальна площа для розрахунку - 20 м²
        </p>
      </div>
    </div>
  );
};

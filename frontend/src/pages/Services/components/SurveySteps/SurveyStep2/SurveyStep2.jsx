import { useState } from 'react';
import { servicesData } from '../../../../../data/servicesData';
import { surveyStepsList } from '../../../../../data/surveyStepsList';

export const SurveyStep2 = () => {
  const [selectedStyle, setSelectedStyle] = useState('');
  return (
    <div className="survey-step survey-step-2">
      <h4 className="survey-step__title h4--bold">
        {surveyStepsList[1].title}
      </h4>
      <ul className="survey-step-2__types-list">
        {servicesData.map(({ id, type }) => (
          <li className="survey-step-2__types-item" key={id}>
            <label>
              <input
                type="radio"
                name="projectType"
                className="survey-step-2__input"
                value={type}
                checked={selectedStyle === type}
                onChange={() => setSelectedStyle(type)}
              />
              {`"${type}"`}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

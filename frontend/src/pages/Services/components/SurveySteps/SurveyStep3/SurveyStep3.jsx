import { useState } from 'react';
import { surveyStepsList } from '../../../../../data/surveyStepsList';

export const SurveyStep3 = () => {
  const [selectedArea, setSelectedArea] = useState('');
  const areasToDesign = [
    { id: 1, area: 'Квартира' },
    { id: 2, area: 'Будинок' },
    { id: 3, area: 'Котедж' },
    { id: 4, area: 'Офіс' },
    { id: 5, area: 'Кафе/Ресторан' },
    { id: 6, area: 'Магазин' },
  ];

  return (
    <div className="survey-step survey-step-3">
      <h4 className="survey-step__title h4--bold">
        {surveyStepsList[2].title}
      </h4>
      <ul className="survey-step-3__areas-list">
        {areasToDesign.map(({ id, area }) => (
          <li className="survey-step-3__areas-item" key={id}>
            <label>
              <input
                type="radio"
                name="areaToDesign"
                className="survey-step-3__input"
                value={area}
                checked={selectedArea === area}
                onChange={() => setSelectedArea(area)}
              />
              {area}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

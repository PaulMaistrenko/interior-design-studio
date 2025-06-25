import { useState } from 'react';

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
    <div className="survey-step-3">
      <h4 className="survey-step__title h4--bold">
        Обери приміщення для дизайну
      </h4>
      <ul className="survey-step-3__areas-list">
        {areasToDesign.map(({ id, area }) => (
          <li className="survey-step-3__areas-item" key={id}>
            <label>
              <input
                type="radio"
                name="projectType"
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

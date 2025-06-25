import { useState } from 'react';

export const SurveyStep4 = () => {
  const [selectedStyle, setSelectedStyle] = useState('');
  const projectStyles = [
    { id: 1, style: 'Мінімалізм' },
    { id: 2, style: 'Скандинавський' },
    { id: 3, style: 'Еко-стиль' },
    { id: 4, style: 'Класика' },
    { id: 5, style: 'Лофт' },
    { id: 6, style: 'Потрібна порада' },
  ];

  return (
    <div className="survey-step-4">
      <h4 className="survey-step__title h4--bold">Який стиль тобі ближче?</h4>
      <ul className="survey-step-4__styles-list">
        {projectStyles.map(({ id, style }) => (
          <li className="survey-step-4__styles-item" key={id}>
            <label>
              <input
                type="radio"
                name="projectStyle"
                className="survey-step-4__input"
                value={style}
                checked={selectedStyle === style}
                onChange={() => setSelectedStyle(style)}
              />
              {style}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

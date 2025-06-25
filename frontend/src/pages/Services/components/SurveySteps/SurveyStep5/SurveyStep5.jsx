import { useState } from 'react';

export const SurveyStep5 = () => {
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const startDates = [
    { id: 1, startDate: 'До 1 місяця' },
    { id: 2, startDate: 'Від 1 до 3 місяців' },
    { id: 3, startDate: 'Від 3 до 6 місяців' },
    { id: 4, startDate: 'Тільки планую' },
  ];
  return (
    <div className="survey-step-5">
      <h4 className="survey-step__title h4--bold">
        Бажані терміни старту робіт
      </h4>
      <ul className="survey-step-5__start-list">
        {startDates.map(({ id, startDate }) => (
          <li className="survey-step-5__start-item" key={id}>
            <label>
              <input
                type="radio"
                name="startDate"
                className="survey-step-5__input"
                value={startDate}
                checked={selectedStartDate === startDate}
                onChange={() => setSelectedStartDate(startDate)}
              />
              {startDate}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

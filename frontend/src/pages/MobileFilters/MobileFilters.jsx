import { useMainContext } from '../../context/MainContext';

export const MobileFilters = () => {
  const { isOpenMobileFilters, setIsOpenMobileFilters } = useMainContext();

  const stylesOptions = [
    'Еко-стиль',
    'Індустріальний',
    'Скандинавський',
    'Мінімалізм',
  ];

  const areaOptions = [
    'Вітальня',
    'Спальня',
    'Санвузол',
    'Кухня',
    'Гардеробна',
    'Дитяча',
  ];

  const toggleMobileFilters = () => {
    setIsOpenMobileFilters((prev) => !prev);
  };

  return (
    <aside className={`mobile-filters ${isOpenMobileFilters ? 'open' : ''}`}>
      <div className="container">
        <div className="mobile-filters-top">
          <h1 className="mobile-filters__title h1--bold">Фільтри</h1>
          <button
            type="button"
            className="mobile-filters__close-button bg-image"
            onClick={toggleMobileFilters}
          ></button>
        </div>
      </div>
      <div className="mobile-filters__content-devider"></div>
      <div className="container">
        <div className="mobile-filters__block">
          <div className="mobile__filter">
            <h4 className="mobile-filter__title">ВИБЕРІТЬ СТИЛЬ:</h4>
            <ul className="mobile-filter__options" role="listbox">
              {stylesOptions.map((option) => (
                <li
                  key={option}
                  className="mobile-filter__option text-secondary--regular"
                >
                  <label>
                    <input type="checkbox" />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="mobile__filter">
            <h4 className="mobile-filter__title">ВИБЕРІТЬ ПРИМІЩЕННЯ:</h4>
            <ul className="mobile-filter__options" role="listbox">
              {areaOptions.map((option) => (
                <li
                  key={option}
                  className="mobile-filter__option text-secondary--regular"
                >
                  <label>
                    <input type="checkbox" />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

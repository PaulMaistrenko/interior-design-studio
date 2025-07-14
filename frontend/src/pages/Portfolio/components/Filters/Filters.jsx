import PropTypes from 'prop-types';
import { Filter } from '../Filter';
import { useState } from 'react';

export const Filters = ({ selectedFilters, setSelectedFilters }) => {
  const [openStates, setOpenStates] = useState({
    style: false,
    area: false,
  });

  const resetFilters = () => {
    setSelectedFilters([]);
    setOpenStates({
      style: false,
      area: false,
    });
  };

  const toggleFilter = (title) => {
    setOpenStates((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="filters-block">
      <div className="filters">
        <Filter
          title="Стиль"
          options={[
            'Еко-стиль',
            'Індустріальний',
            'Скандинавський',
            'Мінімалізм',
          ]}
          isOpen={openStates['style']}
          setIsOpen={() => toggleFilter('style')}
          selected={selectedFilters}
          onSelect={setSelectedFilters}
        />
        <Filter
          title="Приміщення"
          options={[
            'Вітальня',
            'Спальня',
            'Санвузол',
            'Кухня',
            'Гардеробна',
            'Дитяча',
          ]}
          isOpen={openStates['area']}
          setIsOpen={() => toggleFilter('area')}
          selected={selectedFilters}
          onSelect={setSelectedFilters}
        />
      </div>
      <button
        className="filters-reset__button button--text"
        onClick={resetFilters}
      >
        Скинути фільтри
      </button>
    </div>
  );
};

Filters.propTypes = {
  selectedFilters: PropTypes.array.isRequired,
  setSelectedFilters: PropTypes.func.isRequired,
};

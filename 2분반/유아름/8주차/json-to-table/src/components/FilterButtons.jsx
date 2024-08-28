import React from 'react';

function FilterButtons({ filter, onFilterChange }) {
  const cities = ['전체', '서울', '부산', '대구'];

  return (
    <div>
      {cities.map(city => (
        <span
          key={city}
          className={filter === city ? 'filteron' : 'filteroff'}
          onClick={() => onFilterChange(city)}
        >
          {city}
        </span>
      ))}
    </div>
  );
}

export default FilterButtons;

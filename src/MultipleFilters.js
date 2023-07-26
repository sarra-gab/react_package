import React from 'react';
import './style.css';

const MultipleFilters = ({ categories, dates, onCategoryChange, onDateChange }) => {
  return (
    <div className="multiple-filters-container">
      <select
        className="multiple-filters-select"
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">Toutes les catégories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        className="multiple-filters-select"
        onChange={(e) => onDateChange(e.target.value)}
      >
        <option value="">Toutes les dates</option>
        {dates.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MultipleFilters;

import React, { useState } from 'react';
import MultipleFilters from './MultipleFilters';
import './style.css';

const SearchFilterComponent = ({ data, categories, dates, onFilteredDataChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [filters, setFilters] = useState({ category: '', date: '' });

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    applyFilters(searchValue, filters);
  };

  const handleCategoryFilter = (categoryValue) => {
    setFilters({ ...filters, category: categoryValue });
    applyFilters(searchTerm, { ...filters, category: categoryValue });
  };

  const handleDateFilter = (dateValue) => {
    setFilters({ ...filters, date: dateValue });
    applyFilters(searchTerm, { ...filters, date: dateValue });
  };

  const applyFilters = (searchValue, filters) => {
    const filtered = data.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchValue.toLowerCase());

      const matchesCategory = !filters.category || item.category === filters.category;
      const matchesDate = !filters.date || item.date === filters.date;

      return matchesSearch && matchesCategory && matchesDate;
    });

    setFilteredData(filtered);

    if (typeof onFilteredDataChange === 'function') {
      onFilteredDataChange(filtered);
    }
  };

  return (
    <div className="search-filter-container">
      <input
        className="search-filter-input"
        type="text"
        placeholder="Rechercher par Nom..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <MultipleFilters
        className="multiple-filters-container"
        categories={categories}
        dates={dates}
        onCategoryChange={handleCategoryFilter}
        onDateChange={handleDateFilter}
      />

      <ul className="search-filter-list">
        {filteredData.map((item, index) => (
          <li key={index}>
            {item.name} - {item.category} - {item.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilterComponent;

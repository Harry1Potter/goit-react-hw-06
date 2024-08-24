import React from 'react';

const SearchBox = ({ filterValue, onFilterChange }) => {
  const handleFilter = (event) => {
    const value = event.target.value;
    onFilterChange(value);
  };

  return (
    <div>
      <h2>Find contacts by name</h2>
      <input 
        type="text" 
        value={filterValue}
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBox;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div>
      <h2>Find contacts by name</h2>
      <input 
        type="text" 
        value={filterValue}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default SearchBox;
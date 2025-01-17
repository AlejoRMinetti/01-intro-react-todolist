import React from 'react';
import { TodoContext } from '../TodoContext';
import { ReactComponent as SearchSVG } from './search-icon.svg';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className='searchBar'>
      <SearchSVG className="IconSvg"/>
      <input
      className="TodoSearch"
      placeholder="Busque una tarea"
      value={searchValue}
      onChange={onSearchValueChange}
      />

    </div>
  );
}

export { TodoSearch };

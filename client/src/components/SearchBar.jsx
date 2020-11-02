import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from './../redux/actions.js';

export default function SearchBar() {
  // DISPATCHER
  const dispatch = useDispatch();

  // HOOKS
  const [effect, setEffect] = useState(true);
  const [query, setQuery] = useState('Iphone');

  // HANDLERS
  function handleOnChange(event) {
    setQuery(event.target.value);
  }

  function handleFetchQuery() {
    dispatch(getProducts(query));
  }

  return (
    <div>
      <input type="text" name="query" id="query" onChange={handleOnChange} value={query}/>
      <button onClick={() => handleFetchQuery()}>Buscar</button>
    </div>
  );
}
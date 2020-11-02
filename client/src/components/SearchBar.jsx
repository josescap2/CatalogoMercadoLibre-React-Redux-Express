import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts, updateCiclo } from './../redux/actions.js';

export default function SearchBar() {
  // DISPATCHER
  const dispatch = useDispatch();

  // HOOKS
  const [query, setQuery] = useState('');

  // HANDLERS
  function handleOnChange(event) {
    setQuery(event.target.value);
  }

  function handleFetchQuery() {
    dispatch(updateCiclo(1));
    dispatch(getProducts(query));
    setQuery('');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-primary bg-primary">
        <a className="navbar-brand text-white">Catalogo</a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link text-white" target="_blank" href="https://github.com/josescap2">Github <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" target="_blank" href="https://www.linkedin.com/in/josescap/">Linkedin</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" target="_blank" href="https://www.soyhenry.com/webfullstack/">Henry</a>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" value={query} onChange={handleOnChange} />
          <button className="btn btn-outline-light my-2 my-sm-0" onClick={() => handleFetchQuery()}>Search</button>
        </div>
      </nav>
    </div>
  );
}
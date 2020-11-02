import React from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';

export default function Catalog() {
  // SELECTORS
  let products = useSelector(state => state.products);
  let ciclo = useSelector(state => state.ciclo);

  return (
    <div>
      {
        ciclo == 0 ? (
          <h3 className="my-5 display-4">Esperando busqueda</h3>
        ) : ciclo == 1 ? (
          <div className="spinner-border text-dark my-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : ciclo == 2 ? (
          <h3 className="my-5 display-4">Resultados</h3>
        ) : (
          <h3 className="my-5">Ooops! No encontramos lo que buscas, prueba algo mas!</h3>
        )
      }
    </div>
  );
}
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePage, ascProducts } from './../redux/actions.js';

export default function Pager() {
  const dispatch = useDispatch();

  const products = useSelector(state => state.products);
  const pages = useSelector(state => state.pages);
  const page = useSelector(state => state.page);
  
  function handleSetPage(number) {
    dispatch(updatePage(number));
  }

  return (
    products.length > 0 ? (
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            {
              pages === 1 ? (
                <li className="page-item"><button className="page-link">1</button></li>
              ) : (
                <React.Fragment>
                  <li className="page-item"><button className="page-link" onClick={ () => handleSetPage(1)}>1</button></li>
                  <li className="page-item"><button className="page-link" onClick={ () => handleSetPage(2)}>2</button></li>
                </React.Fragment>
              )
            }
          </ul>
        </nav>
      </div>
    ) : (
      <React.Fragment></React.Fragment>
    )
  );
}
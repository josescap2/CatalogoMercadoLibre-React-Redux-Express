import React from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';

export default function Catalog() {
  // SELECTORS
  let products = useSelector(state => state.products);

  return (
    <div>
      
    </div>
  );
}
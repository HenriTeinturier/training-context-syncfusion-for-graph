import React from 'react';
import { products } from '../data/data.js'
import { findProductsOfBrand } from '../selectors/selectors.js';

const Table = () => {
  console.log(products);
  const selectedProducts = findProductsOfBrand(products, 'Gap');
  console.log(selectedProducts);
  return (
    <div>Table</div>
  )
}

export default Table
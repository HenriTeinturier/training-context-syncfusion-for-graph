import React from 'react';
import { products } from '../data/data.js'
import { findProductsOfBrand, returnShowAndBuyForArticle } from '../selectors/selectors.js';

const Table = () => {
  // console.log(products);
  // const selectedProducts = findProductsOfBrand(products, 'Gap');
  // console.log(selectedProducts);
  const stats = returnShowAndBuyForArticle(2002);
  console.log(stats);
  return (
    <div>Table</div>
  )
}

export default Table
/**
 *  on trouve la liste des articles d'une marque
 * @param {Array} products - tous les produits
 * @param {string} brand - marque recherchée
 * @return {Array} - Tableaux des articles trouvés
 */
 export function findProductsOfBrand(products, brand) {
  const brandProducts = products.filter((product) => {
    return product.brand === brand;
  });
  return brandProducts;
}
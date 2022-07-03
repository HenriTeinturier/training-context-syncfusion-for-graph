import { clicLogs } from "../data/data";

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

/**
 *  return Nbr consultation et nbr achat  sur un article
 * @param {int} articleId - Id de l'article
 * @return {Array} - résultats trouvés first = nbclic second = achat
 */
 export function returnShowAndBuyForArticle(articleId) {
  const nbClickArray = clicLogs.filter((clic) => {
    return (clic.articleId === articleId);
  });
  const nbClick = nbClickArray.length;
  
  const nbAchat = nbClickArray.filter((log) => {
    return log.buyAfterClic === true
  }).length;

  return [nbClick, nbAchat];
}
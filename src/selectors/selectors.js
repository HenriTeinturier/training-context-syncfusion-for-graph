import { clicLogs, products} from "../data/data";

// TODO refactoriser en faisant des fonctions plus petite et réutilisable

/**
 *  return le nombre de clic, de consultation moyenne et d'achat pour chaque article d'une marque
 * @param {string} brand - Nom de la marque
 * @return {Array} - tableau avec deux tableaux: 0 articleName, 1 Ca
 */
 export function returnCaByArticleForOneBrand(brand) {

  // récupération
  const selectedProducts = products.filter((product) => {return product.brand === brand;});

  // Tableau des noms des articles
  const articleName = selectedProducts.map((product) => {
    return product.article;
  });

  // Tableau du CA par article
  const articleCa = selectedProducts.map((product) => {
    let Ca = 0;
    let price = product.price;
    clicLogs.forEach((log) => {
      if (log.articleId === product.id && log.buyAfterClic === true) {
        Ca += price;
      }
    })
    return Ca;
  });
  
  return [articleName,  articleCa];

}

/**
 *  return le nombre de clic, de consultation moyenne et d'achat pour chaque article d'une marque
 * @param {string} brand - Nom de la marque
 * @return {Array} - tableaux avec quatre tableaux: 0 articleName, 1 clic, 2 duration, 3 purchase
 */
export function returnClicDurationPurchaseByArticleFromBrand(brand) {

  // récupération
  const selectedProducts = products.filter((product) => {return product.brand === brand;});

  // Tableau des noms des articles
  const articleName = selectedProducts.map((product) => {
    return product.article;
  });

  // Tableau du nombre de clic par article
  const nbrClic = selectedProducts.map((product) => {
    let clic = 0;
    clicLogs.forEach((log) => {
      if (log.articleId === product.id) {
        clic ++;
      }
    })
    return clic;
  });

  // Tableau de la moyenne des consultations par article
  const duration = selectedProducts.map((product) => {
    let duration = 0;
    let nbrArticle = 0
    clicLogs.forEach((log) => {
      if (log.articleId === product.id) {
        duration += log.consultationDuration;
        nbrArticle ++;
      }
    })
    return Math.round(duration / nbrArticle);
  });

  // Tableau du nombre d'achat par article
  const purchase = selectedProducts.map((product) => {
    let nbrAchat = 0;
    clicLogs.forEach((log) => {
      if (log.articleId === product.id) {
        nbrAchat += log.buyAfterClic
      }
    })
    return nbrAchat;
  });
  
  return [articleName, nbrClic, duration, purchase];
}

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
 export function returnShowAndPurchaseForOneArticle(articleId) {
  const nbClickArray = clicLogs.filter((clic) => {
    return (clic.articleId === articleId);
  });
  const nbClick = nbClickArray.length;
  
  const nbAchat = nbClickArray.filter((log) => {
    return log.buyAfterClic === true
  }).length;

  return [nbClick, nbAchat];
}
export const requestApiDrinks = async () => {
  const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const request = await fetch(endpoint);
  const { drinks } = await request.json();
  return drinks;
};

export const requestApiListCategoriesDrinks = async () => {
  const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const request = await fetch(endpoint);
  const { drinks } = await request.json();
  return drinks;
};

export const requestApiFilterByCategoryDrink = async (type) => {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${type}`;
  const request = await fetch(endpoint);
  const { drinks } = await request.json();
  return drinks;
};

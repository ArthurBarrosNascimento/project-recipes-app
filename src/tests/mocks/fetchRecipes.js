import mockCategoriesMeals from './categoriesMeals';
import mockCategoriesDrinks from './categoriesDrinks';
import mockMeals from './meals';
import mockDrinks from './drinks';
import mockFilterByCategoryDrink from './filterByCategoryDrink';
import mockFilterByCategoryMeal from './filterByCategoryMeal';
import corbaDetails from './corbaDetails';
import oneDrink from './oneDrink';
import oneMeal from './oneMeal';

const mockFetch = (url) => Promise.resolve({
  json: () => {
    if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=') return Promise.resolve(mockMeals);
    if (url === 'https://www.themealdb.com/api/json/v1/1/list.php?c=list') return Promise.resolve(mockCategoriesMeals);
    if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef') return Promise.resolve(mockFilterByCategoryMeal);
    if (url === 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771') return Promise.resolve(oneMeal);
    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail') return Promise.resolve(mockFilterByCategoryDrink);
    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=') return Promise.resolve(mockDrinks);
    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list') return Promise.resolve(mockCategoriesDrinks);
    if (url === 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771') return Promise.resolve(corbaDetails);
    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178319') return Promise.resolve(oneDrink);
  },
});

export default mockFetch;

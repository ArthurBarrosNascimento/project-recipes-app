import React, { useState, useEffect } from 'react';
import copy from 'clipboard-copy';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import shareImage from '../images/shareIcon.svg';

function DoneRecipes({ history }) {
  const [recipes, setRecipes] = useState([]);
  const [shared, setShared] = useState(false);

  const receitaMeals = {
    id: '52771',
    type: 'meal',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: '23/06/2020',
    tags: ['Pasta', 'Curry'],
  };

  const receitaDrinks = {
    id: '178319',
    type: 'drink',
    nationality: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: '23/06/2020',
    tags: [],
  };

  useEffect(() => {
    localStorage.setItem('doneRecipes', JSON.stringify([receitaMeals, receitaDrinks]));
    const data = JSON.parse(localStorage.getItem('doneRecipes'));
    setRecipes(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const copyShareLink = (type, id) => {
    if (type === 'meal') {
      const path = `http://localhost:3000/meals/${id}`;
      copy(path);
      setShared(true);
    }
    if (type === 'drink') {
      const path = `http://localhost:3000/drinks/${id}`;
      copy(path);
      setShared(true);
    }
  };

  const filterAll = (type) => {
    if (type === 'meal') {
      const meal = JSON.parse(localStorage.getItem('doneRecipes')) || [];
      const filterMeal = meal.filter((item) => item.type === 'meal');
      setRecipes(filterMeal);
    }
    if (type === 'drink') {
      const drink = JSON.parse(localStorage.getItem('doneRecipes')) || [];
      const filterDrink = drink.filter((item) => item.type === 'drink');
      setRecipes(filterDrink);
    }
    if (type === 'all') {
      const data = JSON.parse(localStorage.getItem('doneRecipes')) || [];
      setRecipes(data);
    }
  };

  return (
    <main>
      <Header history={ history } />
      <div>
        <button
          type="button"
          onClick={ () => filterAll('all') }
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          type="button"
          onClick={ () => filterAll('meal') }
          data-testid="filter-by-meal-btn"
        >
          Meals
        </button>
        <button
          type="button"
          onClick={ () => filterAll('drink') }
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </div>
      <div>
        {recipes.map((info, index) => (
          <div key={ index }>

            <Link to={ `/${info.type}s/${info.id}` }>
              <img
                src={ info.image }
                width="150px"
                alt={ info.name }
                data-testid={ `${index}-horizontal-image` }
              />
            </Link>

            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              {`${info.nationality} - ${info.category}`}
            </p>

            <Link to={ `/${info.type}s/${info.id}` }>
              <h2
                data-testid={ `${index}-horizontal-name` }
              >
                { info.name }

              </h2>
            </Link>

            <p data-testid={ `${index}-horizontal-top-text` }>{info.alcoholicOrNot}</p>

            {info.tags.map((tagName) => (
              <p
                key={ tagName }
                data-testid={ `${index}-${tagName}-horizontal-tag` }
              >
                {tagName}
              </p>
            ))}

            <p data-testid={ `${index}-horizontal-done-date` }>{info.doneDate }</p>
            {shared && <p>Link copied!</p>}
            <button
              type="button"
              onClick={ () => copyShareLink(info.type, info.id) }
            >
              <img
                src={ shareImage }
                alt="share"
                data-testid={ `${index}-horizontal-share-btn` }
              />
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

DoneRecipes.propTypes = {
  history: string,
}.isRequired;

export default DoneRecipes;

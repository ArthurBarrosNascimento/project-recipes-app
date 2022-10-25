import {
  GET_DRINKS,
  GET_MEALS,
  IS_REQUESTING,
  GET_LIST_CATEGORIES_DRINKS,
  GET_LIST_CATEGORIES_MEALS,
} from '../Actions';

const INITIAL_STATE = {
  isRequesting: false,
  drinks: [],
  meals: [],
  categoriesMeals: [],
  categoriesDrinks: [],
};

function recipes(state = INITIAL_STATE, { payload, type }) {
  switch (type) {
  case IS_REQUESTING:
    return {
      ...state,
      isRequesting: true,
    };
  case GET_LIST_CATEGORIES_DRINKS:
    return {
      ...state,
      categoriesDrinks: payload,
    };
  case GET_LIST_CATEGORIES_MEALS:
    return {
      ...state,
      categoriesMeals: payload,
    };
  case GET_DRINKS:
    return {
      ...state,
      drinks: payload,
      isRequesting: false,
    };
  case GET_MEALS:
    return {
      ...state,
      meals: payload,
      isRequesting: false,
    };
  default:
    return state;
  }
}
export default recipes;
import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Recipes from './Pages/Recipes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" />
      <Route path="/profile" />
      <Route exact path="/drinks" component={ Recipes } />
      <Route path="/drinks/:id-da-receita" />
      <Route path="/drinks/:id-da-receita/in-progress" />
      <Route exact path="/meals" component={ Recipes } />
      <Route path="/meals/:id-da-receita" />
      <Route path="/meals/:id-da-receita/in-progress" />
      <Route path="/favorite-recipes" />
      <Route path="/done-recipes" />
    </Switch>
  );
}

export default App;

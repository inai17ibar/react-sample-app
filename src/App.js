import React from 'react';
import './App.css';
import { recipes } from './recipeData.js';

function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
        <h2>{recipe.name}</h2>
        <ul>
          {recipe.ingredients.map(ingredient =>
            <li key={ingredient}>
              {ingredient}
            </li>
          )}
        </ul>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <RecipeList></RecipeList>
  );
}
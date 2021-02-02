import React from 'react';
import { Link } from 'react-router-dom';

const RecipesPage = () => {
  return (
    <ul>
      <li><Link to="/recipewrite"><button type="button">마들렌</button></Link></li>
      <li><Link to="/recipewrite"><button type="button">까눌레</button></Link></li>
      <li><Link to="/recipewrite"><button type="button">크렘 브륄레</button></Link></li>
    </ul>
  );
};

export default RecipesPage;

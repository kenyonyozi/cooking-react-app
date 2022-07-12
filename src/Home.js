import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Logo">
      <div className="text">
        <h1> ALL YOUR RECIPES AND BEYOND </h1>
        <h3>Browse variety of Receipes Add and put out meals</h3>

        <Link to='/createrecipes'>Add Recipes</Link>{''}
        <Link to='/recipes'>Veiw Recipes</Link>
      </div>
    </div>
  );
};

export default Home;

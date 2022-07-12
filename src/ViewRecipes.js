/* eslint-disable no-unused-vars */
import React from "react";
import ListRecipe from "./RecipeList";
import useFetch from "./useFetch";

const Recipes = () => {
  const { data : recipes, IsPending , error } = useFetch('http://localhost:4000/users')

  return (
    <div>
      {error && <div>{error}</div>}
      {IsPending && <div> Loading...</div>}
      {recipes && (
        <ListRecipe
          recipes={recipes}
          title="All Recipes!"
        />
      )}
    </div>
  );
};

export default Recipes;

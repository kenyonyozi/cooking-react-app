import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const RecipeDetails = () => {
  const { id } = useParams();
  const {
    data: recipe,
    IsPending,
    error,
  } = useFetch("http://localhost:4000/users" + id);

  return (
    <div className="recipe-details">
      {IsPending && <div>Loading...</div>}
      {error && <div> {error} </div>}
      {recipe && (
        <article>
          <h2>{recipe.title}</h2>
          <p>Writen By {recipe.author}</p>
          <div>{recipe.ingrediates}</div>
        </article>
      )}
    </div>
  );
};

export default RecipeDetails;

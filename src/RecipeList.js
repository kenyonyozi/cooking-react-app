import React from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "./assests/logo.jpg";

const ListRecipe = ({ recipes, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {recipes.map((recipe) => (
        <div className="flex-container" key={recipe._id}>
          <Link to={`/recipes/${recipes._id}`}>
            <Card className="" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={logo} height="250px" />
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>Written By {recipe.author}</Card.Text>
                <Button variant="danger">Delete</Button>
              </Card.Body>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListRecipe;

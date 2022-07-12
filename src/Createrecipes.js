import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

const Createrecipes = () => {
  const [title, setTitle] = useState("");
  const [ingrediates, setIngrediates] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = {title, ingrediates , author};

    fetch('http://localhost:4000/users',{
        method:'POST',
        headers:{ 'Content-Type': 'application/json'},
        body: JSON.stringify(recipe)
    }).then(() =>{
        console.log('new recipe added')
        navigate.push('/recipes')
    })

  }

  return (
    <div className="form-recipe">
      <h2>Add A Recipe</h2>
      <Form onSubmit={handleSubmit} className="create-form">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Recipe Title</Form.Label>
          <Form.Control type="text" required value={title} onChange={ (e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Recipe Ingrediates</Form.Label>
          <Form.Control as="textarea" rows={3} required value={ingrediates} onChange={ (e) => setIngrediates(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Recipe Author</Form.Label>
          <Form.Control type="text" required value={author} onChange={ (e) => setAuthor(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Createrecipes;

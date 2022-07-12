import React from "react";
import { Navbar, Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Appbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <Button variant="outline-success">add receipe</Button>
              <Button variant="outline-success">view receipe</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Appbar;

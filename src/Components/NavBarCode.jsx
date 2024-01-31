import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const MyNavCode = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navbar-custom"
    >
      <Container>
        <Navbar.Brand href="#home">BookStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text className="text-muted">
          IL SITO DOVE I NOSTRI LIBRI NON SEMBRANO NEANCHE LIBRI
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default MyNavCode;

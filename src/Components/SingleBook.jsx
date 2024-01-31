import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  render() {
    const { book, selected, onSelect } = this.props;

    return (
      <Card
        className={`mb-4 card-custom ${selected ? "selected" : ""}`}
        onClick={() => onSelect(book)}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>Price: ${book.price}</Card.Text>
          <Card.Text>Category: {book.category}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;

import React from "react";
import Card from "react-bootstrap/Card";

const SingleBook = ({ book, onSelect, selectedAsin }) => {
  const isSelected = book.asin === selectedAsin;

  return (
    <Card
      onClick={() => onSelect(book.asin)}
      style={{
        border: isSelected ? "3px solid red" : "1px solid #eee",
        cursor: "pointer",
      }}
    >
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>Price: ${book.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList = ({ books }) => {
  const [selectedBookAsin, setSelectedBookAsin] = useState(null);

  const selectBook = (asin) => {
    setSelectedBookAsin(asin);
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          {books.map((book) => (
            <SingleBook
              key={book.asin}
              book={book}
              onSelect={selectBook}
              selectedAsin={selectedBookAsin}
            />
          ))}
        </Col>
        <Col md={4}>
          {selectedBookAsin && <CommentArea asin={selectedBookAsin} />}
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;

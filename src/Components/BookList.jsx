import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    selectedBookAsin: null,
  };

  selectBook = (asin) => {
    this.setState({ selectedBookAsin: asin });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={8}>
            {this.props.books.map((book) => (
              <SingleBook
                key={book.asin}
                book={book}
                onSelect={this.selectBook}
                selectedAsin={this.state.selectedBookAsin}
              />
            ))}
          </Col>
          <Col md={4}>
            <CommentArea asin={this.state.selectedBookAsin} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;

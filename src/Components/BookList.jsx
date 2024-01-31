import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    search: "",
    selectedBook: null,
  };

  updateSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  selectBook = (book) => {
    this.setState({ selectedBook: book });
  };

  render() {
    const filteredBooks = this.props.books.filter((book) =>
      book.title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <Container>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Cerca un libro..."
              value={this.state.search}
              onChange={this.updateSearch}
            />
          </Col>
        </Row>
        <Row>
          {filteredBooks.map((book) => (
            <Col
              key={book.asin}
              xs={12}
              md={6}
              lg={4}
              xl={3}
              style={{ marginBottom: "30px" }}
            >
              <SingleBook
                book={book}
                selected={this.state.selectedBook === book}
                onSelect={this.selectBook}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;

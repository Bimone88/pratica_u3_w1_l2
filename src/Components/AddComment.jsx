import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: "",
    rate: 1,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { asin, onCommentAdded } = this.props;
    const newComment = {
      ...this.state,
      elementId: asin,
    };

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYTBhZjViMjYxNTAwMTk4YTY5NDgiLCJpYXQiOjE3MDY3OTUxODMsImV4cCI6MTcwODAwNDc4M30.ixpuP0AkqM2YXzvRK-Yk97CgkWaPnHCGYMxLUqVmSQM",
      },
    })
      .then((response) => {
        if (response.ok) {
          onCommentAdded();
          this.setState({ comment: "", rate: 1 });
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Commento</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="comment"
            value={this.state.comment}
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            name="rate"
            value={this.state.rate}
            onChange={this.handleInputChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Aggiungi Commento
        </Button>
      </Form>
    );
  }
}

export default AddComment;

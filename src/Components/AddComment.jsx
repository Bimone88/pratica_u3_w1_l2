import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = ({ asin, onCommentAdded }) => {
  const [commentData, setCommentData] = useState({
    comment: "",
    rate: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCommentData({
      ...commentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      ...commentData,
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
          setCommentData({ comment: "", rate: 1 });
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Commento</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="comment"
          value={commentData.comment}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Valutazione</Form.Label>
        <Form.Control
          as="select"
          name="rate"
          value={commentData.rate}
          onChange={handleInputChange}
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
};

export default AddComment;

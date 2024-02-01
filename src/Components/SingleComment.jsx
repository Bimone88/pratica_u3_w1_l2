import React from "react";
import { Button } from "react-bootstrap";

const SingleComment = ({ comment, onDelete }) => {
  const handleDelete = () => {
    onDelete(comment._id);
  };

  return (
    <div>
      <p>{comment.comment}</p>
      <span>Rating: {comment.rate}</span>
      <Button variant="danger" size="sm" onClick={handleDelete}>
        Cancella
      </Button>
    </div>
  );
};

export default SingleComment;

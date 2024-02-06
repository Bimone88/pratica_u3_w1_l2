import React, { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchComments = () => {
    if (!asin) return;

    setIsLoading(true);
    setIsError(false);

    fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYTBhZjViMjYxNTAwMTk4YTY5NDgiLCJpYXQiOjE3MDY3OTUxODMsImV4cCI6MTcwODAwNDc4M30.ixpuP0AkqM2YXzvRK-Yk97CgkWaPnHCGYMxLUqVmSQM",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchComments();
  }, [asin]);

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <Error message="Errore nel caricamento dei commenti" />}
      {asin && !isLoading && !isError && (
        <>
          <CommentsList comments={comments} />
          <AddComment asin={asin} onCommentAdded={fetchComments} />{" "}
        </>
      )}
    </div>
  );
};

export default CommentArea;

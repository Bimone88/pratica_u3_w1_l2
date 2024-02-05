import React, { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
    isError: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.asin && this.props.asin !== prevProps.asin) {
      this.fetchComments();
    }
  }

  fetchComments = () => {
    this.setState({ isLoading: true, isError: false });
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYTBhZjViMjYxNTAwMTk4YTY5NDgiLCJpYXQiOjE3MDY3OTUxODMsImV4cCI6MTcwODAwNDc4M30.ixpuP0AkqM2YXzvRK-Yk97CgkWaPnHCGYMxLUqVmSQM",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((comments) =>
        this.setState({ comments: comments, isLoading: false })
      )
      .catch(() => this.setState({ isError: true, isLoading: false }));
  };

  render() {
    const { comments, isLoading, isError } = this.state;
    const { asin } = this.props;

    return (
      <div>
        {isLoading && <Loading />}
        {isError && <Error message="Errore nel caricamento dei commenti" />}
        {asin && !isLoading && !isError && (
          <>
            <CommentsList comments={comments} />
            <AddComment asin={asin} onCommentAdded={this.fetchComments} />
          </>
        )}
      </div>
    );
  }
}

export default CommentArea;

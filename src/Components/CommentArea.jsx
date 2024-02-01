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

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    this.setState({ isLoading: true });
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYTBhZjViMjYxNTAwMTk4YTY5NDgiLCJpYXQiOjE3MDY3OTUxODMsImV4cCI6MTcwODAwNDc4M30.ixpuP0AkqM2YXzvRK-Yk97CgkWaPnHCGYMxLUqVmSQM",
        },
      }
    )
      .then((response) => response.json())
      .then((comments) =>
        this.setState({ comments: comments, isLoading: false })
      )
      .catch((error) => this.setState({ isError: true, isLoading: false }));
  };

  handleDeleteComment = (commentId) => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYTBhZjViMjYxNTAwMTk4YTY5NDgiLCJpYXQiOjE3MDY3OTUxODMsImV4cCI6MTcwODAwNDc4M30.ixpuP0AkqM2YXzvRK-Yk97CgkWaPnHCGYMxLUqVmSQM",
      },
    })
      .then((response) => {
        if (response.ok) {
          this.fetchComments(); // Ricarica i commenti dopo l'eliminazione
        }
      })
      .catch((error) => this.setState({ isError: true }));
  };

  render() {
    const { comments, isLoading, isError } = this.state;

    if (isLoading) return <Loading />;
    if (isError) return <Error message="Errore nel caricamento dei commenti" />;

    return (
      <div>
        <CommentsList
          comments={comments}
          onDeleteComment={this.handleDeleteComment}
        />
        <AddComment
          asin={this.props.asin}
          onCommentAdded={this.fetchComments}
        />
      </div>
    );
  }
}

export default CommentArea;

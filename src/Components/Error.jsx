import React from "react";
import { Alert } from "react-bootstrap";

const Error = ({ message }) => <Alert variant="danger">{message}</Alert>;

export default Error;

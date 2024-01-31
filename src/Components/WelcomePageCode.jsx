import Alert from "react-bootstrap/Alert";

const WelcomePageCode = ({ subtitle }) => {
  return (
    <Alert variant="success">
      <Alert.Heading>Welcome to BookStore!</Alert.Heading>
      <p>{subtitle}</p>
    </Alert>
  );
};

export default WelcomePageCode;

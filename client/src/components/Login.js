import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

const Login = ({ onIdSubmit }) => {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    onIdSubmit(idRef.current.value);
  };

  const createNewId = () => {
    onIdSubmit(uuidV4());
  };

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group className="mb-2">
          <Form.Label>Enter your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>

        <Button type="submit" style={{ marginRight: "0.5rem" }}>
          Login
        </Button>
        <Button onClick={createNewId} variant="secondary">
          Create a new Id
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

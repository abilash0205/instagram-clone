import { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import authImage from "../../assets/authenticateImage.png";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = UserAuth();
  const navigate = useNavigate();

  const loginExistingUser = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      alert("Logged in successfully");
      navigate("/homepage");
    } catch (error) {
      const statusSection = document.getElementById("status");
      statusSection.innerText = error.code.slice(5);
      setTimeout(() => {
        statusSection.innerText = "";
      }, 4500);
    }
  };

  const { googleSignIn, user } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null){
      navigate('/homepage')
    }
  }, [navigate, user])

  return (
    <Container>
      <Row className="h-screen flex justify-center items-center gap-1">
        <Col md={6} className="mx-auto">
          <img className="mx-auto" src={authImage} width={"400px"} />
        </Col>
        <Col className="w-100 border-2">
          <h1
            style={{ fontFamily: "Billabong" }}
            className="text-5xl text-center my-2"
          >
            Instagram
          </h1>
          <Form onSubmit={loginExistingUser} className="mx-auto max-w-[300px]">
            <Form.Group className="my-4">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="text"
                value={email}
                placeholder="user@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              className="text-dark w-100 btn my-4"
              variant="primary"
              type="submit"
            >
              Log in
            </Button>
          </Form>
          <p className="text-center">or</p>
          <GoogleButton className="mx-auto my-4" onClick={handleGoogleSignIn} />
          <p className="text-center text-lg">
            Don&apos;t have an account?{" "}
            <Link className="text-primary" to="/signup">
              Sign Up
            </Link>
          </p>
          <div className="text-center my-3">
            <span className="text-danger text-xl" id="status"></span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;

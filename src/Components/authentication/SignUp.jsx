import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateInputs();
    setDisplayName("");
    setEmail("");
    setPassword("");
    try {
      await createUser(email, password);
      alert("Account created successfully");
      navigate("/homepage");
    } catch (error) {
      const success = document.getElementById("alert-message");
      success.innerText = error.message;
    }
  };

  const { googleSignIn, user } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/homepage");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate("/homepage");
    }
  }, [navigate, user]);

  function validateInputs() {
    const userName = document.getElementById("userName").value.trim();
    const userEmail = document.getElementById("userEmail").value.trim();
    const userPassword = document.getElementById("userPassword").value.trim();
    let isValid = true;

    if (userName === "") {
      alert("Username is required");
      isValid = false;
    }

    if (userEmail === "") {
      alert("Email is required");
      isValid = false;
    } else if (!validateEmail(userEmail)) {
      alert("Enter a valid email");
      isValid = false;
    }

    if (userPassword === "") {
      alert("Password is required");
      isValid = false;
    }
    return isValid;
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <Container className="h-screen flex justify-center items-center">
      <Form
        onSubmit={handleSubmit}
        className="mx-auto text-center border-2 max-w-[320px]"
      >
        <h1 style={{ fontFamily: "Billabong" }} className="text-5xl m-2">
          Instagram
        </h1>
        <p className="mx-3 my-2">
          Sign up to see photos and videos from your friends.
        </p>
        <GoogleButton className="mx-auto my-2" onClick={handleGoogleSignIn} />
        <p>OR</p>
        <Form.Group className="m-3">
          <Form.Control
            type="email"
            value={email}
            className="my-4"
            id="userEmail"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="m-3">
          <Form.Control
            type="text"
            value={displayName}
            className="my-4"
            id="userName"
            placeholder="Name"
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="m-3">
          <Form.Control
            type="password"
            value={password}
            id="userPassword"
            className="my-4"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <p className="my-1 mx-3">
          By signing up, you agree to our Terms , Privacy Policy and Cookies
          Policy .
        </p>

        <Button
          className="text-dark w-72 btn my-4"
          variant="primary"
          type="submit"
        >
          Create an account
        </Button>
        <p className="m-1">
          Have an account?{" "}
          <Link className="text-primary" to="/">
            Log in
          </Link>
        </p>
        <span id="alert-message" className="text-danger"></span>
      </Form>
    </Container>
  );
};
export default SignUp;

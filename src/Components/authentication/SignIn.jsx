import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import authImage from "../../assets/authenticateImage.png";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Logged in successfully");

        // toast.success("Logged in successfully", {
        //   position: toast.POSITION.TOP_CENTER,
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        // });
      })
      .catch((error) => {
        const statusSection = document.getElementById("status");
        statusSection.innerText = error.code.slice(5);
        setTimeout(() => {
          statusSection.innerText = "";
        }, 4500);
        
        // toast.success(`${error}`, {
        //   position: toast.POSITION.TOP_CENTER,
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        // });
      });
  };

  const { googleSignIn } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
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
          <Form
            onSubmit={signIn}
            style={{ width: "300px" }}
            className="mx-auto"
          >
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

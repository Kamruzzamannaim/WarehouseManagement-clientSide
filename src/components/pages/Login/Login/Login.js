import { useRef } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import auth from "../../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
    const emailRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const navigateRegister = () => {
    navigate("/registration");
  };
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email,password);
  };
  if (loading || sending) {
    return <p>Loading</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("sent email");
    } else {
      toast("please enter your email");
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto p-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email" ref={emailRef}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <Button className="d-flex mx-auto" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p className="text-center">
        Don't have an account?{" "}
        <button
          className="btn btn-link  text-decoration-none"
          onClick={navigateRegister}
        >
          {" "}
          Please register
        </button>
      </p>
      <p className="text-center">
        Forget Password?
        <button
          className="btn btn-link text-primary pe-auto text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </button>
        </p>
      <div className="social  text-center">
      <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
const Registration = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
    const [updateProfile, updating] = useUpdateProfile(auth);

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/home");
  };
  if (loading || updating) {
    return <p>Loading</p>;
  }
  if (user) {
   navigate('/home');
  }
  return (
    <div>
      <Form onSubmit={handleRegister} className="w-50 mx-auto p-5">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter your name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />

        <label className={agree ? "" : "text-danger"} htmlFor="terms">
          Accept all Terms and Conditions
        </label>
        <Button
          disabled={!agree}
          className="d-flex mx-auto"
          variant="primary"
          type="submit"
        >
          Registration
        </Button>
      </Form>
      <p className="text-center">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please login
        </Link>
      </p>
      {error?.message}
    </div>
  );
};

export default Registration;

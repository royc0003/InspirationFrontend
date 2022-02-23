import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Toasts } from "../components/Toasts";
import Logo from "../components/Logo";
import styles from "../sass/pages/signuppage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// import actions
import { signup, clearError } from "../actions/auth";

export function Signup(props) {
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    setRerender(!rerender);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const errorMessage = useSelector((state) => state.auth.password1);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const password = useRef({});
  password.current = watch("password", "");

  const handleEmailOnChange = (event) => {
    console.log(event);
    setValue(event.target.name, event.target.value);
  };

  const handleOnSubmit = (data, e) => {
    // event.preventDefault();
    console.log(data);
    console.log(errors);
    e.preventDefault();
    dispatch(signup(data.email, data.password, data.passwordConfirm));
	e.target.reset();
	// re-render
	setRerender(!rerender)
	// clear error cache
	dispatch(clearError());
  };

  useEffect(() => {
    console.log("[DEBUG] Registered controls");
  }, [register]);

  return (
    <Container id={styles.signupContainer}>
      {isAuthenticated ? <Navigate to={"/formpage"} /> : ""}
      {errorMessage
        ? errorMessage.map((item, i) => <Toasts key={i} item={item}></Toasts>)
        : ""}
      <div
        className="d-flex justify-content-center align-items-center"
        id={styles.signupCardContainer}
      >
        <Card id={styles.signupCard}>
          <Card.Body>
            <div id={styles.logoContainer}>
              <Logo />
            </div>
            <Card.Title>
              <strong>Sign up</strong>
            </Card.Title>
            <Card.Subtitle>
              Not a member yet? Fill up the form to join us!
            </Card.Subtitle>
            <Form
              onSubmit={handleSubmit(handleOnSubmit)}
              id={styles.signupForm}
              noValidate
            >
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleEmailOnChange}
                  {...register("email", {
                    required: "Email field is empty!",
                    pattern: {
                      value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                      message: "Invalid email address!",
                    },
                  })}
                  className={
                    errors.email ? "is-invalid form-control" : "form-control"
                  }
                />
                <Form.Text className={`${styles.errorMsg} text-danger d-block`}>
                  {errors.email ? errors.email.message : ""}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password field is empty!",
                    minLength: {
                      value: 6,
                      message: "Password is too short!",
                    },
                  })}
                  className={
                    errors.password ? "is-invalid form-control" : "form-control"
                  }
                />
                <Form.Text className={`${styles.errorMsg} text-danger d-block`}>
                  {errors.password ? errors.password.message : ""}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="passwordConfirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  name="passwordConfirm"
                  type="password"
                  placeholder="Enter your password again"
                  {...register("passwordConfirm", {
                    validate: (v) =>
                      v === password.current || "The passwords do not match",
                  })}
                  className={
                    errors.passwordConfirm
                      ? "is-invalid form-control"
                      : "form-control"
                  }
                />
                <Form.Text className={`${styles.errorMsg} text-danger d-block`}>
                  {errors.passwordConfirm ? errors.passwordConfirm.message : ""}
                </Form.Text>
              </Form.Group>
              <br />
              <Button variant="primary" type="submit">
                Sign up
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

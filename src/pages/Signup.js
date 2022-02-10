import React, { useEffect, useRef } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Logo from '../components/Logo';
import styles from '../sass/pages/signuppage.module.scss';

export function Signup(props) {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });
	const password = useRef({});
	password.current = watch('password', '');

	const handleEmailOnChange = (event) => {
		console.log(event);
		setValue(event.target.name, event.target.value);
	}

	const handleOnSubmit = (data) => {
		// event.preventDefault();
		console.log(data);
		console.log(errors);
	}

	useEffect(() => {
		console.log("[DEBUG] Registered controls")
	}, [register]);

	return (
		<Container id={styles.signupContainer}>
			<div className='d-flex justify-content-center align-items-center' id={styles.signupCardContainer}>
				<Card id={styles.signupCard}>
					<Card.Body>
						<Logo />
						<Card.Title><strong>Sign up</strong></Card.Title>
						<Card.Subtitle>Not a member yet? Fill up the form to join us!</Card.Subtitle>
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
									className="form-control"
									{...register("email", {
										required: 'Email field is empty!',
										pattern: {
											value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
											message: 'Invalid email address!'
										}
									})
									}
								/>
								<Form.Text className="text-danger">
									{errors.email ? errors.email.message : ''}
								</Form.Text>
							</Form.Group>
							<Form.Group className="mb-3" controlId="password">
								<Form.Label>Password</Form.Label>
								<input
									name="password"
									type="password"
									placeholder="Enter your password"
									className="form-control"
									{...register("password", {
										required: 'Password field is empty!',
										minLength: {
											value: 6,
											message: 'Password is too short!'
										}
									})
									}
								/>
								<Form.Text className="text-danger">
									{errors.password ? errors.password.message : ''}
								</Form.Text>
							</Form.Group>
							<Form.Group className="mb-3" controlId="passwordConfirm">
								<Form.Label>Confirm Password</Form.Label>
								<input
									name="passwordConfirm"
									type="password"
									placeholder="Enter your password again"
									className="form-control"
									{...register("passwordConfirm", {
											validate: v => v === password.current || 'The passwords do not match'
										})
									}
								/>
								<Form.Text className="text-danger">
									{errors.passwordConfirm ? errors.passwordConfirm.message : ''}
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
	)
}
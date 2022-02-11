import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Logo from '../components/Logo';
import styles from '../sass/pages/loginpage.module.scss';

export function Login(props) {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });

	const handleOnSubmit = (data) => {
		console.log(data);
	};

	return (
		<Container id={styles.loginContainer}>
			<div className='d-flex justify-content-center align-items-center' id={styles.loginCardContainer}>
				<Card id={styles.loginCard}>
					<Card.Body>
						<div id={styles.logoContainer}>
							<Logo />
						</div>
						<Card.Title><strong>Login</strong></Card.Title>
						<Card.Subtitle>Welcome back, please login to continue!</Card.Subtitle>
						<Form
							id={styles.loginForm}
							onSubmit={handleSubmit(handleOnSubmit)}
						>
							<Form.Group className="mb-3" controlId="email">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									placeholder="Enter your email"
									{...register("email", {
										required: 'Email field is empty!',
										pattern: {
											value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
											message: 'Invalid email address!'
										}
									})}
									className={errors.email ? 'is-invalid form-control' : 'form-control'}
								/>
								<Form.Text className={`${styles.errorMsg} text-danger d-block`}>
									{errors.email ? errors.email.message : ''}
								</Form.Text>
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>
							<Link to="/forgotpassword" style={{ float: 'right' }}>Forgot your Password?</Link>
							<Form.Group className="mb-3" controlId="password">
								<Form.Label>Password</Form.Label>
								<Form.Control
									name="password"
									type="password"
									placeholder="Enter your Password"
									{...register("password", {
										required: 'Password field is empty!',
										minLength: {
											value: 6,
											message: 'Password is too short!'
										}
									})}
									className={errors.password ? 'is-invalid form-control' : 'form-control'}
								/>
							<Form.Text className={`${styles.errorMsg} text-danger d-block`}>
								{errors.password ? errors.password.message : ''}
							</Form.Text>
							</Form.Group>
							<br />
							<Button variant="primary" type="submit">
								Login
							</Button>
						</Form>
					</Card.Body>
				</Card>
			</div>
		</Container>
	)
}
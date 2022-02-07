import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import styles from '../sass/pages/loginpage.module.scss';

export function Login(props) {
	return (
		<Container id={styles.loginContainer}>
			<div className='d-flex justify-content-center align-items-center' style={{height: '100%'}}>
				<Card id={styles.loginCard}>
					<Card.Body>
						<Card.Title><strong>Login</strong></Card.Title>
						<Card.Subtitle>Welcome back, please login to continue!</Card.Subtitle>
						<Form id={styles.loginForm}>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>
							<Link to="/forgotpassword" style={{float: 'right'}}>Forgot your Password?</Link>								
							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>
							<br/>
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
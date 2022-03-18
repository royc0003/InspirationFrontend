import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Figure, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ClimbingBoxLoader } from "react-spinners";
import {
	flattenmatchedusers, flattenuserinterests, getallusers, getinterests, getmatchedhistory,
	getuserinfo
} from "../actions/profilepage";
import styles from '../sass/pages/_profilepage.module.scss';
import { LOCAL_INTERESTS } from "./Questionaire2";


export function Profilepage(props) {

	const mock_interests = LOCAL_INTERESTS;

	// Set states Related to Spinner
	let [loading] = useState(true);
	let [color] = useState("#212529");
	// set dispatch
	const dispatch = useDispatch();

	// Get current isComplete state from profilepage store to render Spinner
	const isComplete = useSelector((state) => state.profilepage.isComplete);
	const { user_info, flatten_matched_users, all_interests, flatten_user_interests } = useSelector((state) => state.profilepage)

	const debug = false;

	// Similar to React's Component Did Mount
	useEffect(() => {
		const retrieveAllDataPromise = async () => {
			console.log("This is working");
			await dispatch(getallusers());
			await dispatch(getmatchedhistory());
			await dispatch(getinterests());
			await dispatch(getuserinfo());
			await dispatch(flattenmatchedusers());
			await dispatch(flattenuserinterests());
		};
		// Retrieves all data necessary for rendering profile page
		retrieveAllDataPromise();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		console.log("[DEBUG] matched_history");
		console.log(flatten_matched_users);
	}, [flatten_matched_users]);

	return (
		<Container id={styles.profilePageContainer}>
			{
				!isComplete
					?
					(
						<Row>
							<div id={styles.loader}>
								<ClimbingBoxLoader color={color} loading={loading} size={20} />
							</div>
						</Row>
					)
					:
					(
						<div>
							<Row className={styles.rowSection}>
								<h1>My Profile</h1>
							</Row>
							<Row className="d-flex justify-content-center">
								<Image
									id={styles.profileImage}
									src={user_info.pic_url}></Image>

							</Row>
							<Row>
								<div className="d-flex justify-content-center mt-5">
									<div className="d-flex flex-column">
										<div className={styles.profileInfo}>
											<span className="mark"><strong>Email:</strong></span>
											<div className="sub-comments">{user_info.email}</div>
										</div>
										<div className={styles.profileInfo}>
											<span className="mark"><strong>Bio:</strong></span>
											<div className="sub-comments">{user_info.biography ? user_info.biography : "User does not have a bio"}</div>
										</div>
										<div className={styles.profileInfo}>
											<span className="mark"><strong>Hall:</strong></span>
											<div className="sub-comments">
												{user_info.hall ? user_info.hall : "User does not have hall"}
											</div>
										</div>
									</div>
								</div>
							</Row>

							{/* Selected Interests */}
							<Row className={styles.rowSection}>
								<h2>Selected Interests</h2>
								{
									mock_interests.map((v, i) => {
										return (
											<Col xs={2} key={v.id}>
												<Figure>
													<Figure.Image
														width={100}
														height={100}
														alt="200x200"
														src="https://picsum.photos/100/"
													/>
													<Figure.Caption className={styles.figureCaption}>
														{v.interest.charAt(0).toUpperCase() + v.interest.slice(1)}
													</Figure.Caption>
												</Figure>
											</Col>
										);
									})
								}
							</Row>

							{/* Matched History */}
							<Row className={styles.rowSection}>
								<h2>Matched History</h2>
								<Row className="g-4" xs={3}>
									{
										flatten_matched_users.map((matched_user) => {
											return (
												<Col xs={3} key={matched_user.id}>
													<Card className={styles.matchedUserCard}>
														<Card.Img variant="top" src={matched_user.pic_url} />
														<Card.Body>
															<Card.Title>{matched_user.email.substr(0, matched_user.email.indexOf('@'))}</Card.Title>
															<Card.Text>
																<span style={{ fontStyle: 'italic' }}>
																	{matched_user.biography ?? "This user does not have a biography!"}
																</span>
															</Card.Text>
														</Card.Body>
														<Card.Footer>
															<Button variant="secondary">View Profile</Button>
														</Card.Footer>
													</Card>
												</Col>
											)
										})
									}
								</Row>
							</Row>
						</div>
					)}
		</Container>
	);
}

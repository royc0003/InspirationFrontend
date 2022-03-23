import { useEffect, useState } from "react";
import { Button, ButtonGroup, Card, Col, Container, Dropdown, DropdownButton, Figure, Form, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import {
	flattenmatchedusers, flattenuserinterests, getallusers, getinterests, getmatchedhistory,
	getuserinfo
} from "../actions/profilepage";
import { selecthall } from "../actions/question1";
import { PhotoGrid } from "../components/PhotoGrid";
import styles from '../sass/pages/_profilepage.module.scss';
import { namedHalls } from "./Questionaire1";

export function Profilepage(props) {

	// Set states Related to Spinner
	let [loading] = useState(true);
	let [color] = useState("#212529");
	//Editmode
	const [isInEditMode, setIsInEditMode] = useState(false);
	const [hallInput, setHallInput] = useState("");
	const [halls, setHalls] = useState([]);
	const navigate = useNavigate();
	const storeHalls = useSelector((state) => state.question1.storeHalls);

	// set dispatch
	const dispatch = useDispatch();

	// Get current isComplete state from profilepage store to render Spinner
	const isComplete = useSelector((state) => state.profilepage.isComplete);

	// TODO don't understand the conflicting user_interests IDs
	// flatten_user_interests don't seem to be populated
	const { user_info, flatten_matched_users, flatten_user_interests } = useSelector((state) => state.profilepage)

	const handleSaveClick = (e) => {
		setIsInEditMode(!isInEditMode);
	};

	const handleEditClick = (e) => {
		console.log(e);
		setIsInEditMode(!isInEditMode);
	};

	const handleSelect = (evt) => {
		var _selectedID = parseInt(evt);
		// filter array of objects
		var tmpArray = [...halls];
		if (storeHalls) {
			// change to api's storedHalls if data is present
			tmpArray = [...storeHalls];
		}
		var _selectedHall = tmpArray.filter(
			(_singleHall) => parseInt(_singleHall.id) === _selectedID
		);
		// Save selected hall in store
		console.log("Dispatched to userHall: " + _selectedHall[0].name);

		setHallInput(_selectedHall[0].name);
		dispatch(selecthall(_selectedHall[0].name));
	};

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

		setHalls((prevArray) => [...prevArray, ...namedHalls]);
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
									src={user_info.pic_url} />

							</Row>
							<Row>
								<div className="d-flex justify-content-center mt-5">
									<div id={styles.profileInfoSection} className="d-flex flex-column">
										<div className={styles.profileInfo}>
											<span className="mark"><strong>Email:</strong></span>
											{
												!isInEditMode
													?
													<Button
														className="float-end"
														variant="outline-secondary"
														onClick={handleEditClick}
													>
														Edit
													</Button>
													:
													<Button
														className="float-end"
														variant="success"
														onClick={handleSaveClick}
													>
														Save
													</Button>
											}
											<div className="sub-comments">{user_info.email}</div>
										</div>
										<div className={styles.profileInfo}>
											<span className="mark"><strong>Bio:</strong></span>
											{
												!isInEditMode
													?
													<div className="sub-comments">{user_info.biography ? user_info.biography : "User does not have a bio"}</div>
													:
													<Form.Control
														as="textarea"
														rows={3}
														defaultValue={user_info.biography}
													/>
											}
										</div>
										<div className={styles.profileInfo}>
											<span className="mark"><strong>Hall:</strong></span>
											{
												!isInEditMode
													?
													<div className="sub-comments">
														{user_info.hall ? user_info.hall : "User does not have hall"}
													</div>
													:
													<DropdownButton
														onSelect={handleSelect}
														as={ButtonGroup}
														size="md"
														variant="primary"
														title={hallInput ? `${hallInput}` : "Select Hall"}
														style={{ marginLeft: "30px" }}
													>
														{ // Error Handling: In case API Fails
															storeHalls === null
																? halls.map((value, i) => (
																	<Dropdown.Item
																		eventKey={`${value.id}`}
																		key={i}
																	>{`${value.name}`}</Dropdown.Item>
																))
																: storeHalls.map((value, i) => (
																	<Dropdown.Item
																		eventKey={`${value.id}`}
																		key={i}
																	>{`${value.name}`}</Dropdown.Item>
																))}
													</DropdownButton>
											}
										</div>
									</div>
								</div>
							</Row>

							{/* Selected Interests */}
							<Row className={styles.rowSection}>
								<h2 className="mb-4">Selected Interests</h2>
								{
									flatten_user_interests.map((v, i) => {
										return (
											<Col xs={3} key={i}>
												<Figure>
													<Figure.Image
														width={100}
														height={100}
														alt="200x200"
														className={styles.image}
														src={
															require("../assets/new_svgs/" +
																v.trim().replace(/\s+/g, "").toLowerCase() +
																".svg").default
														}
													/>
													<Figure.Caption className={styles.figureCaption}>
														{v.charAt(0).toUpperCase() + v.slice(1)}
													</Figure.Caption>
												</Figure>
											</Col>
										);
									})
								}
							</Row>

							{/* Matched History */}
							<div style={{visibility: 'hidden', position: 'absolute', top: '-1000px', left:'-1000px' }}>
								<PhotoGrid />
							</div>

							<Row className={styles.rowSection}>
								<h2>Matched History</h2>
								<Row className="g-4 mt-1" xs={3}>
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
															<Button variant="secondary" onClick={() => navigate(`/view/${matched_user.id}`)}>View Profile</Button>
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

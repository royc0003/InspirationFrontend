/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Col, Image, Row, Stack } from "react-bootstrap";
// Bootstrap related componentes
// https://github.com/jaywilz/react-bootstrap-range-slider
import RangeSlider from "react-bootstrap-range-slider";
// Import Reudx Related Components/Library
import { useDispatch, useSelector } from "react-redux";
import { updateinterestrank } from "../actions/question3";
import styles from '../sass/components/_slider.module.scss';


export function Slider(props) {
	//   const [_thisinterest, set_Interest] = useState([]);
	// Set States
	const [value, setValue] = useState(1);
	const interests = useSelector((state) => state.question2.interests);

	// Set Dispatch
	const dispatch = useDispatch();

	// destructuring props
	const { index, i } = props;
	const handleSubmit = () => {
		console.log("Dispatching to update interest rank");
		dispatch(updateinterestrank(i, parseInt(value)));
	};
	const _interest = interests[index - 1]
	return (
		<Row className={styles.interestRow}>
			<Col sm={12} md={4} lg={2}>
				{/* <Stack gap={2}> */}
				<div className="slider-item-1">
					<Image
						className={styles.interestImg}
						src={
							require("../assets/new_svgs/" +
								_interest.interest
									.trim()
									.replace(/\s+/g, "")
									.toLowerCase() +
								".svg").default
						}
						alt="No Image Available"
					/>
				</div>
				{/* </Stack> */}
			</Col>
			<Col sm={12} md={8} lg={10}>
				<Stack gap={2} className={styles.sliderContainer}>
					<div><strong>{_interest.interest.charAt(0).toUpperCase() + _interest.interest.slice(1)}</strong></div>
					<RangeSlider
						variant={"primary"}
						min={1}
						max={5}
						size={"lg"}
						value={value}
						className={styles.slider}
						onChange={(changeEvent) => setValue(changeEvent.target.value)}
						onAfterChange={handleSubmit}
					/>
				</Stack>
			</Col>
		</Row>
	);
}

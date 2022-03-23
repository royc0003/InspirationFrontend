import React, { useEffect, useState } from "react";
// Bootstrap related components
import { Button, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
// Router Related Imports
import { Link, useNavigate } from "react-router-dom";
// Import CSS
import "../sass/components/_Photo.scss";

export function Photo(props) {
	const [interestIDs, setValue] = useState([]);
	const {
		user,
		xl,
		lg,
		xxl,
		sm,
		xs,
		md,
		lg_span,
		xs_span,
		sm_span,
		md_span,
		xl_span,
		xxl_span,
	} = props;
	// xs_span={12} sm_span={10} md_span={9} xl_span={12} xxl_span={12}
	const listOfInterests = useSelector(
		(state) => state.photogrid.listOfInterests
	);
	const navigate = useNavigate();
	// Similar to componentDidMount()
	useEffect(() => {
		console.log("processing string");
		console.log(user);
		// Process interest string
		var _tmp = [];
		for (var _singleInterest of user.interests) {
			console.log(_singleInterest)
			_tmp.push(listOfInterests[parseInt(_singleInterest.interest.id) - 1]);
		}
		// if (_tmp.length >= 1) {
		//   setValue("#" + _tmp.join(" #").trim());
		// } else {
		//   setValue("No Interest Stated");
		// }
		if (_tmp) {
			setValue((oldArray) => [...oldArray, _tmp]);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const renderInterests = (interest, i) => {
		return (
			<span key={interest} className="photo-caption pink-highlight">
				&nbsp;#{interest}&nbsp;
			</span>
		);
	};

	return (
		<Col
			xs={{ span: xs_span, offset: xs }}
			sm={{ span: sm_span, offset: sm }}
			md={{ span: md_span, offset: md }}
			lg={{ span: lg_span, offset: lg }}
			xl={{ span: xl_span, offset: xl }}
			xxl={{ span: xxl_span, offset: xxl }}
		>

			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/view/${parseInt(user.id)}`}>
						<Image
							src={
								user.pic_url
									? user.pic_url
									: `https://picsum.photos/400/400/?image=${Math.floor(
										Math.random() * 85
									)}`
							}
							alt="null"
							className="grid-photo"
						/>
					</Link>

				</div>

				<figcaption>
					<h4 className="figCaptionHeader">{user.email.substring(0, user.email.indexOf('@'))}</h4>
					{
						interestIDs[0]
							? interestIDs[0].map((v, i) => renderInterests(v, i))
							: ""
					}
					<p className="biography">{user.biography}</p>

					<Button variant="secondary" className="cardBtn" onClick={() => navigate(`/view/${user.id}`)}>View Profile</Button>
				</figcaption>
			</figure>
		</Col>
	);
}

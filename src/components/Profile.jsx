import React from "react";
import "./Profile.css";
import alandev from "../assets/alandev.png";
import camaxdev from "../assets/camaxdev.png";

function Profile() {
	return (
		<div className="Profile">
			<div className="photo-container">
				<img src={camaxdev} alt="Developer" className="profile-photo" />
				<img src={alandev} alt="Hover Developer" className="hover-photo" />
			</div>
			<h1>0xCamax</h1>
		</div>
	);
}

export default Profile;

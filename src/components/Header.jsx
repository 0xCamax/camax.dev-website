import React from "react";
import "./Header.css";
import alandev from "../assets/alandev.png";
import camaxdev from "../assets/camaxdev.png";

function Header() {
	return (
		<header className="Header">
			<div className="photo-container">
				<img src={alandev} alt="Developer" className="profile-photo" />
				<img src={camaxdev} alt="Hover Developer" className="hover-photo" />
			</div>
			<h1>Alan Bojorquez</h1>
			<h2>Desarrollador Backend enfocado en blockchain</h2>
		</header>
	);
}

export default Header;

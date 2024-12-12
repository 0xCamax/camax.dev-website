import React from "react";
import "./Navbar.css";

function Navbar({ setPage }) {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<button onClick={() => setPage("home")}>Inicio</button>
				</li>
				<li>
					<button onClick={() => setPage("CV")}>CV</button>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
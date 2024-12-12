import React, { useState, useEffect } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Navbar from "./components/NavBar";
import CV from "./components/CV";

import Section from "./components/Section";
import { FaSun, FaMoon } from "react-icons/fa";
import Home from "./components/Home";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [page, setPage] = useState("home");
	const [fade, setFade] = useState(false); // Estado para controlar la animación

	// Cambiar la clase del body cuando el estado darkMode cambie
	useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark-mode");
		} else {
			document.body.classList.remove("dark-mode");
		}
	}, [darkMode]);

	const changePage = (newPage) => {
		setFade(true);
		setTimeout(() => {
			setPage(newPage);
			setFade(false);
		}, 300);
	};

	// Función para renderizar la página actual
	const renderPage = () => {
		switch (page) {
			case "home":
				return <Home />;
			case "CV":
				return <CV />;
			default:
				return <Section title="404" content="Página no encontrada." />;
		}
	};

	return (
		<div className="App">
			<header className="Header">
				<Navbar setPage={changePage} />
				<button
					onClick={() => setDarkMode(!darkMode)}
					aria-label="Toggle Dark Mode"
					className="theme-toggle-btn"
				>
					{darkMode ? (
						<FaMoon size={24} color="white" />
					) : (
						<FaSun size={24} color="black" />
					)}
				</button>
				<Profile />
			</header>

			{/* Contenido Principal */}
			<main className={`content ${fade ? "fade" : ""}`}>{renderPage()}</main>
		</div>
	);
}

export default App;

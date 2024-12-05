import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
	const [darkMode, setDarkMode] = useState(false);

	// Cambiar la clase del body cuando el estado darkMode cambie
	useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark-mode");
		} else {
			document.body.classList.remove("dark-mode");
		}
	}, [darkMode]);
	return (
		<div className="App">
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Dark Mode"
          className="theme-toggle-btn"
        >
          {darkMode ? (
            <FaMoon size={24} color="white" /> // Icono de luna cuando está en modo oscuro
          ) : (
            <FaSun size={24} color="black" /> // Icono de sol cuando está en modo claro
          )}
        </button>
			<main>
				<Header />
				{/* Sección "Sobre Mí" */}
				<Section
					title="Sobre Mí"
					content={
						<>
							<ul style={{listStyle: "none"}}>
								<li>
									Soy un desarrollador backend especializado en blockchain y
									DeFi, con experiencia en la implementación de soluciones para
									la optimización de operaciones y rendimientos.
								</li>
								<li>
									Desde 2020, trabajo de manera independiente optimizando
									contratos inteligentes, integrando protocolos descentralizados
									y analizando tendencias del sector.
								</li>
								<li>
									Mi enfoque combina la programación, analisis de riesgos y
									análisis de datos para innovar en el ámbito de las
									aplicaciones financieras descentralizadas.
								</li>
							</ul>
						</>
					}
				/>

				{/* Sección "Experiencia" */}
				<Section
					title="Experiencia"
					content={
						<>
							<h4>
								<strong>Desarrollador Independiente</strong> (2020 - Actual)
							</h4>
							<ul style={{ listStyle: "circle", paddingLeft: 20 }}>
								<li>
									<ul>
										<li>
											Diseño y optimización de contratos inteligentes en
											Solidity.
										</li>
										<li>
											Análisis de datos blockchain con herramientas como
											TheGraph.
										</li>
										<li>
											Implementación de estrategias para mejorar la eficiencia
											en aplicaciones DeFi.
										</li>
										<li>
											Investigación de tendencias y análisis de riesgos en
											sistemas descentralizados.
										</li>
									</ul>
								</li>
							</ul>
						</>
					}
				/>

				{/* Sección "Habilidades" */}
				<Section
					title="Habilidades"
					content={
						<>
							<ul>
								<li>Solidity, Node.js, Go, Rust, MongoDB, Express.</li>
								<li>
									Experiencia con herramientas como:
									<ul style={{ listStyle: "circle", paddingLeft: 20 }}>
										<li>
											Desarrollo e integración de protocolos DeFi (
											<strong>Uniswap</strong>, <strong>Aave</strong>, etc.) y
											estrategias de <strong>yeild farming</strong>.
										</li>
										<li>
											<strong>TheGraph</strong> para:
											<ul style={{ listStyle: "circle", paddingLeft: 20 }}>
												<li>
													Extracción de datos de blockchain para análisis de
													tendencias.
												</li>
												<li>
													Investigación y análisis de rendimiento de
													aplicaciones DeFi.
												</li>
												<li>
													Optimización de aplicaciones descentralizadas mediante
													análisis de datos.
												</li>
											</ul>
										</li>
										<li>
											<strong>ethers.js</strong>, <strong>web3.js</strong> y{" "}
											<strong>viem</strong> para integración con blockchain y
											contratos inteligentes.
										</li>
										<li>
											<strong>Substreams</strong> de TheGraph para procesar
											grandes volúmenes de datos de blockchain de manera
											eficiente.
										</li>
										<li>
											<strong>Criptografía</strong>: Implementación de RSA en
											blockchain.
										</li>
									</ul>
								</li>
							</ul>
						</>
					}
				/>

				{/* Sección "Certificaciones" */}
				<Section
					title="Certificaciones"
					content={
						<ul style={{ listStyle: "circle", paddingLeft: 20 }}>
							<li>FrontEnd (ReactJS) – Coderhouse</li>
							<li>BackEnd (MERN) – Coderhouse</li>
							<li>Fullstack Developer – Coderhouse</li>
						</ul>
					}
				/>

				{/* Sección "Educación" */}
				<Section
					title="Formación"
					content={
						<>
							<ul style={{ listStyle: "circle", paddingLeft: 20 }}>
								<li>
									Curso la licenciatura en Ingeniería en Sistemas
									Computacionales, TecNM
								</li>
								<li>Ingles Fluido</li>
							</ul>
						</>
					}
				/>

				{/* Sección "Intereses" */}
				<Section
					title="Intereses"
					content={
						<ul style={{ listStyle: "circle", paddingLeft: 20 }}>
							<li>Ciberseguridad aplicada a blockchain.</li>
							<li>DeFi</li>
							<li>Criptografía</li>
							<li>Deportes: futbol, padel</li>
						</ul>
					}
				/>

				{/* Sección "Contacto" ocupando todo el ancho del grid */}
				<Section
					className="contact-section"
					title="Contacto"
					content={
						<>
							<ul style={{ listStyle: "circle", paddingLeft: 20 }}>
								<li>Email: alan@camax.dev</li>
								<li>
									GitHub: <br />
									<a
										href="https://github.com/0xcamax"
										target="_blank"
										rel="noopener noreferrer"
									>
										github.com/0xcamax
									</a>
									<br />
									<a
										href="https://github.com/0xalbatros"
										target="_blank"
										rel="noopener noreferrer"
									>
										github.com/0xalbatros
									</a>
								</li>
								<li>
									Twitter:{" "}
									<a
										href="https://twitter.com/0xcamax"
										target="_blank"
										rel="noopener noreferrer"
									>
										@0xcamax
									</a>
								</li>
							</ul>
						</>
					}
				/>
			</main>
		</div>
	);
}

export default App;

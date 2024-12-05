import React from "react";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
	return (
		<div className="App">
			<main>
			<Header />
				{/* Sección "Sobre Mí" */}
				<Section
					title="Sobre Mí"
					content={
						<>
							<ul>
								<li>
									Soy un desarrollador backend especializado en blockchain y
									DeFi, con experiencia en la implementación de soluciones
									para la optimización de operacion y rendimientos.
								</li>
								<li>
									Desde 2020, trabajo de manera independiente optimizando
									contratos inteligentes, integrando protocolos descentralizados
									y analizando tendencias del sector.
								</li>
								<li>
									Mi enfoque combina ciberseguridad, criptografía, analisis de riesgos y análisis de
									datos para innovar en el ámbito de las aplicaciones
									financieras descentralizadas.
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
							<ul>
								<li>
									<strong>Desarrollador Independiente</strong> (2020 - Actual)
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
								<li>Solidity, Node.js, Go, Rust, MongoDB.</li>
								<li>
									Experiencia con herramientas como <strong>TheGraph</strong>{" "}
									para:
									<ul style={{listStyle: "circle", paddingLeft: 20}}>
										<li>
											Extracción de datos de blockchain para análisis de
											tendencias.
										</li>
										<li>
											Investigación y análisis de rendimiento de aplicaciones
											DeFi.
										</li>
										<li>
											Optimización de aplicaciones descentralizadas mediante
											análisis de datos.
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
						<ul style={{listStyle: "circle", paddingLeft: 20}}>
							<li>FrontEnd (ReactJS) – Coderhouse</li>
							<li>BackEnd (MERN) – Coderhouse</li>
							<li>Fullstack Developer – Coderhouse</li>
						</ul>
					}
				/>

				{/* Sección "Educación" */}
				<Section
					title="Educación"
					content="Curso la Licenciatura en Ingeniería en Sistemas Computacionales, TecNM"
				/>

				{/* Sección "Intereses" */}
				<Section
					title="Intereses"
					content={
						<ul style={{listStyle: "circle", paddingLeft: 20}}>
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
							<ul>
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

import React from "react";
import Section from "./Section";

function Home() {
	return (
		<Section
        name={"home"}
        title={"Hola,"}
			content={
				<div className="home">
					<div className="introduction">
						<p>
							soy Camax, un desarrollador backend especializado en
							blockchain y DeFi.
						</p>
                        <p>
                            Trabajo por mi cuenta creando estrategias de automatización de inversiones centradas en AMMs y lending/borrowing.
                        </p>
					</div>

					<div className="social-networks">
						<p>Sigueme en mis redes:</p>
						<ul>
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
							<li>
								GitHub:{" "}
								<a
									href="https://github.com/0xcamax"
									target="_blank"
									rel="noopener noreferrer"
								>
									github.com/0xcamax
								</a>
							</li>
                            <li>Email: alan@camax.dev</li>
						</ul>
					</div>
				</div>
			}
		/>
	);
}

export default Home;

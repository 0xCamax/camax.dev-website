import React from "react";


function Section({ title, content }) {
	return (
		<section className="Section">
			<h3>{title}</h3>
			<div>{content}</div>
		</section>
	);
}

export default Section;

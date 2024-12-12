import React from "react";


function Section({ title, content, name }) {
	return (
		<section className={(name ? `Section${"-" + name}`: "Section")}>
			<h3>{title}</h3>
			<div>{content}</div>
		</section>
	);
}

export default Section;

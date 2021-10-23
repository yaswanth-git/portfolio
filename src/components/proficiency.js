import "../styles/proficiency.css";
import Fade from "react-reveal/Fade";

const RatingBar = (props) => {
	var classe = "col-md-9";
	if (props.label === "Frontend / Design") {
		classe = classe + " front-end";
	} else if (props.label === "Backend") {
		classe = classe + " backend";
	} else {
		classe = classe + " Programming";
	}
	return (
		<div className="rating-bar">
			<div style={{ fontSize: 20 }}>{props.label}</div>
			<div className="row">
				<div className="col-md-12">
					<div className={classe}></div>
				</div>
			</div>
		</div>
	);
};

function Proficiency({ darkMode }) {
	const skills = [
		{ label: "Frontend / Design" },
		{ label: "Backend" },
		{ label: "Programming" },
	];
	return (
		<div
			className="proficiency"
			style={{
				backgroundColor: darkMode ? "black" : "white",
				color: darkMode ? "white" : "",
			}}
		>
			<Fade bottom>
				<div className="heading">Proficiency</div>
				<div>
					{skills.map((skill) => (
						<RatingBar label={skill.label} rating={skill.rating} />
					))}
				</div>
			</Fade>
		</div>
	);
}

export default Proficiency;

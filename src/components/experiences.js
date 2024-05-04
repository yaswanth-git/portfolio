import "../styles/experience.css";
import ExpCard from "./expCard";
import Fade from "react-reveal/Fade";
function Experience({ darkMode }) {
  const experience = [
    {
      heading: "Factset",
      desc: "Software Engineer 2",
      period: "Oct 2022 - Present",
    },
    {
      heading: "Acorn Globus",
      desc: "Full Stack Engineer",
      period: "Aug 2021 - Oct 2022",
    },
    {
      heading: "LeadSquared",
      desc: "Associate Software Developer",
      period: "Jun 2021 - Aug 2021",
    },
    {
      heading: "Newton School",
      desc: "Intern",
      period: "Oct 2020 - May 2021",
    },
  ];
  return (
    <div
      className="experience"
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "",
      }}
    >
      <Fade bottom>
        <div className="heading">Experiences</div>
        <div className="row">
          {experience.map((exp) => (
            <ExpCard
              heading={exp.heading}
              desc={exp.desc}
              period={exp.period}
            />
          ))}
        </div>
      </Fade>
    </div>
  );
}
export default Experience;

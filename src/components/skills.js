import "../styles/skills.css";
import Lottie from "react-lottie";
import animationData from "../assets/animations/ido.json";
import Fade from "react-reveal/Fade";
const LeftContent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="left" style={{ float: "left" }}>
      <div className="animation">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};
const RightContent = () => {
  return (
    <div className="col-md-6 right">
      <div className="heading">What I do</div>
      <p>FULL STACK DEVELOPER WHO WANT TO EXPLORE NEW TECH STACK</p>
      <div className="skill-text">
        ⚡ Develop highly interactive Front end / User Interfaces for your web
        and mobile applications
      </div>
      <div className="skill-text">
        ⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks
      </div>
      <div className="skill-text">⚡ Web Hosting</div>
    </div>
  );
};

function Skills({ darkMode }) {
  return (
    <div>
      <div
        className="row skills"
        style={{
          backgroundColor: darkMode ? "black" : "white",
          color: darkMode ? "white" : "",
        }}
      >
        <div className="col-md-1"></div>
        <Fade left>
          <LeftContent />
        </Fade>
        <Fade right>
          <RightContent />
        </Fade>
      </div>
    </div>
  );
}

export default Skills;

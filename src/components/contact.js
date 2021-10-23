import "../styles/contact.css";
import github from "../assets/github.svg";
import gmail from "../assets/gmail.svg";
import phone from "../assets/phone-call-icon.svg";
import linkedin from "../assets/linkedin.svg";
import Fade from "react-reveal/Fade";
function Contact({ darkMode }) {
  return (
    <div
      className="contact row"
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "",
      }}
    >
      <Fade left>
        <div className="col-md-9">
          <div className="heading">Reach Out to me ☎️!</div>
          <div className="col-md-3">
            <img
              className="image mobile"
              alt="Yaswanth"
              src="https://avatars1.githubusercontent.com/u/40210064?s=400&u=05ed6b3730590bf8afa99c4f903f94c3cba7b968&v=4"
            />
          </div>
          <div className="desc">
            WANNA DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR
            ALL.
          </div>
          <div className="my-self">
            "👨‍💻 Software Developer | Freelancer 📚Stack: MERN"
          </div>
          <div className="location">East Godavari, Andhra Pradesh</div>
          <div className="open">Open for opportunities: Yes</div>
          <div className="icons">
            <a
              href="https://www.github.com/yaswanth-git"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="github" src={github} />
            </a>
            <a
              href="mailto:yaswanth.offl@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="gmail" src={gmail} />
            </a>
            <a href="tell:+919491606916" target="_blank" rel="noreferrer">
              <img alt="phone" src={phone} />
            </a>
            <a
              href="https://www.linkedin.com/in/yaswanth-munduri-8976751b6/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="gmail" style={{ background: "white" }} src={linkedin} />
            </a>
          </div>
        </div>
      </Fade>
      <Fade right>
        <div className="col-md-3">
          <img
            className="image ds"
            alt="Yaswanth"
            src="https://avatars.githubusercontent.com/u/70765767?v=4"
          />
        </div>
      </Fade>
    </div>
  );
}
export default Contact;

import "./App.css";
import About from "./components/about";
import Skills from "./components/skills";
import Proficiency from "./components/proficiency";
import Experience from "./components/experiences";
import Contact from "./components/contact";
import { useState } from "react";
import dark_mode_off from "./assets/dark_mode_off.svg";
import dark_mode_on from "./assets/dark_mode_on.svg";
import Headroom from "react-headroom";
import Fade from "react-reveal/Fade";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const _goToContact = () => {
    window.location = "#m-contact";
  };
  return (
    <div style={{ backgroundColor: darkMode ? "black" : "white" }}>
      <Headroom>
        <nav
          className="navbar navbar-default"
          id="header-main"
          style={{ backgroundColor: darkMode ? "black" : "white" }}
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <div>
                <div className="heading">
                  {"< "}Yaswanth{" />"}
                </div>
              </div>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#m-about">About</a>
                </li>
                <li>
                  <a href="#m-skills">Skills</a>
                </li>
                <li>
                  <a href="#m-experience">Experience</a>
                </li>
                <li>
                  <a href="#m-contact">Contact</a>
                </li>
                <li
                  onClick={() => setDarkMode(!darkMode)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <img
                    className="darkMode"
                    alt="toogle icon"
                    src={darkMode ? dark_mode_on : dark_mode_off}
                    style={{ width: 25, height: 25 }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Headroom>
      <div id="m-about">
        <Fade bottom>
          <About darkMode={darkMode} _goToContact={_goToContact} />
        </Fade>
      </div>
      <div id="m-skills">
        <Skills darkMode={darkMode} />
        <Proficiency darkMode={darkMode} />
      </div>
      <div id="m-experience">
        <Experience darkMode={darkMode} />
      </div>
      <div id="m-contact">
        <Contact darkMode={darkMode} />
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: 23,
          marginBottm: 20,
          backgroundColor: darkMode ? "black" : "white",
        }}
      >
        😎
      </div>
    </div>
  );
}

export default App;

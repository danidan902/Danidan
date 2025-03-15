import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Component/About";
import Portfolio from "./Component/Portfolio";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faShareAlt,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const TextChanger = () => {

  const text = [
    "Hi there",
    "My Name is Dani dan",
    "Wellcome to My portfolio Website",
  
  ];

  const [currentText, setCurrentText] = useState(text[0]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => {
        const newCounter = (prevCounter + 1) % text.length;
        setCurrentText(text[newCounter]);
        return newCounter;
      });
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="change-text" className="change-text">
      {currentText}
    </div>
  );
};



function App() {
  return (
    <div>
      <Router>
        <div className="navbar">
        <div className="row-sit"><TextChanger /></div>

        
          <nav className="nav">
            <ul>
              <li className="link">
                {" "}
                <FontAwesomeIcon icon={faHome} />{" "}
                <Link className="links" to="/">
                  Home
                </Link>{" "}
              </li>
              <li className="link">
                <FontAwesomeIcon icon={faUser} />
                <Link className="links" to="/Portfolio">
                  Skill
                </Link>
              </li>
              <li className="link">
                <FontAwesomeIcon icon={faShareAlt} />
                <Link className="links" id="About" to="/About">
                  About
                </Link>
              </li>
              <li className="link">
                <FontAwesomeIcon icon={faLock} />
                <Link className="links" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} /> 
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

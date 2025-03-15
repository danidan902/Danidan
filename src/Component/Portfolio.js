import React from "react";
import "./project.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import Card from "react-bootstrap/Card";
import post from "./image2/dg.jpg";
import run from "./image2/devloper.jpg";
import rod from "./image2/des.jpg";
import comp from "./image2/comp.jpg";
import pro from "./image2/lap.jpg";
import note from "./image2/note.jpg";

function Portfolio() {
  return (
    <div className="aboute" id="about">
      <div>
        <BasicExample />
        <ScondExample />
        <ThreedExample />
        <CardExample />
        <HoverExample />
        <SolidExample />
      </div>

      <SocialMediaIcons />
      <div>
        <h1 className="my-service">My Service</h1>
        <p className="my">This is what I offer</p>
      </div>
    </div>
  );
}
export default Portfolio;

function BasicExample() {
  return (
    <Card className="card-2" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={post} />
      <Card.Body>
        <Card.Title> Full-Stack Web Development</Card.Title>
        <Card.Text>
          Full-Stack Web Development Craft dynamic web applications using the
          MERN stack for a seamless user experience. From frontend design with
          React.js to backend logic with Node.js and Express.js, I deliver
          end-to-end solutions
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
function ScondExample() {
  return (
    <Card className="card-3" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={run} />
      <Card.Body>
        <Card.Title> Website Design</Card.Title>
        <Card.Text>
          Full-Stack Web Development When you choose me as your web designer,
          you’re not just getting a service—you’re getting a partner who is
          committed to your success. I take pride in my attention to detail,
          creativity, and ability to meet deadlines. I’m
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
function ThreedExample() {
  return (
    <Card className="card-4" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={note} />
      <Card.Body>
        <Card.Title> Frontend Devloper</Card.Title>
        <Card.Text>
          a passionate frontend developer with a love for creating beautiful,
          responsive, and user-friendly web experiences. I specialize in turning
          ideas into reality using modern technologies like HTML, CSS,
          JavaScript, and frameworks like React and Vue.js.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function CardExample() {
  return (
    <Card className="card-5" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={rod} />
      <Card.Body>
        <Card.Title> Full-Stack Web Development</Card.Title>
        <Card.Text>
          Full-Stack Web Development Craft dynamic web applications using the
          MERN stack for a seamless user experience. From frontend design with
          React.js to backend logic with Node.js and Express.js, I deliver
          end-to-end solutions
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
function HoverExample() {
  return (
    <Card className="card-6" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pro} />
      <Card.Body>
        <Card.Title>Frontend developer</Card.Title>
        <Card.Text>
          a passionate frontend developer with a love for creating beautiful,
          responsive, and user-friendly web experiences. I specialize in turning
          ideas into reality using modern technologies like HTML, CSS,
          JavaScript, and frameworks like React and Vue.js.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function SolidExample() {
  return (
    <Card className="card-7" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={comp} />
      <Card.Body>
        <Card.Title> Full-Stack Web Development</Card.Title>
        <Card.Text>
          Full-Stack Web Development Craft dynamic web applications using the
          MERN stack for a seamless user experience. From frontend design with
          React.js to backend logic with Node.js and Express.js, I deliver
          end-to-end solutions
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <a
        href="https://www.facebook.com/share/15jErHS3K3/?mibextid=qi2Omg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://danidan.mystrikingly.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.youtube.com/@DaniDan-u4z"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube />
      </a>
      <a
        href="https://dand93575.wixsite.com/danidan-website"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.tiktok.com/@danidan659?is_from_webapp=1&sender_device=pc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTiktok />
      </a>
    </div>
  );
};

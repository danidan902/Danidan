
import React, { useEffect, useState } from "react";
import "./project.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,  faPhone,} from "@fortawesome/free-solid-svg-icons";
import image from "./image2/code photo.jpg";
import dev from "./image2/dev.jpg";
import Button from "react-bootstrap/Button";
import second from "./image2/updot.jpg";
import image22 from './image2/slash.jpg'

import 'aos/dist/aos.css';   
import AOS from 'aos'; 
import { FaFacebook, FaTwitter, FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';

const Dynamic = () => {  

  useEffect(() => {  
      AOS.init({  
          duration: 800,
          once: true, 
      });  
  }, []);  

  return (  
     <div>
     
      
     </div>
  );  
};  



function Home() {
  return (
    <div className="div2">
     

      <div className="div">

        <p className="TextExample">
          {" "}
          
        </p>
      </div>

      <div>
        <h1 className="port">My portfolio Website</h1>

        <p className="paragraph">
          <h2 className="label2">About me</h2>
          <br></br>
          "My name is dani dan, I thrive on turning ideas into<br/> functional, 
           visually appealing digital experiences.<br/> With a passion  for clean 
           code and innovative design, <br/> I specialize in creating  responsive, 
           user-friendly websites <br/> that not only look great but also perform 
           seamlessly <br/> across all devices. Whether it's building a website <br/> from 
           scratch or optimizing an existing one, I love the <br/> challenge of solving 
            problems and delivering solutions <br/> that make a real impact."
            I take pride in writing clean,<br/>  well-documented 
            
            code and continuously learning new <br/>technologies 
            to stay ahead in the ever-evolving world <br/>of web development.
        </p>
      </div>

      <ImageAndTextExample />

      <div className="class2">
        <img className="image-back" src={dev} alt="selected"></img>
        <div className="control">
          <p className="pharagraph3">
            <h1 className="for-you">Elevate Your Online Presence </h1>
            <br></br>
            Stand out in the digital world with a stunning website tailored to
            your brand. At Danidan Website, we specialize in creating custom,
            responsive designs that captivate your audience. From sleek layouts
            to seamless functionality, our team of experts will bring your
            vision to life. Let's collaborate to transform your online presence
            and leave a lasting impression.
          </p>
          <br></br>

          <OutlineTypesExample />
        </div>
       
      </div>

      <div className="second-image">
      <Dynamic/>
        <h1 className="validate">WellCOME To This Site</h1>
        <img className="selacted22" src={second} alt="selacted"></img>
        <img className="image-dot" src={image22} alt="selacted"></img>

        
      </div>

      <div className="div3">
        <h1 className="nav-text">Web Desingn</h1>
        <p className="text-margin">
          <br></br>
          Whether designing residential or commercial spaces, Atelier Lane has
          built <br></br> a reputation on achieving highly individual results
          for a discerning, responsive <br></br> international clientele.
        </p>
      </div>

      <div>
        <h1 className="nav-web">
          {" "}
          Website
          <br></br>
          Devlopment
        </h1>
        <p className="web-nav">
          Whether designing residential or commercial spaces, Atelier Lane has
          built <br></br>a reputation on achieving highly individual results for
          a discerning
        </p>
      </div>
      <h1 className="contact-me">Contact me</h1>
      <div className="last-div">

     <h1 className="label" id="#About">About me</h1>
     <p className="project">my project</p>
      
     <h1 className="Resources">Resources</h1>
<p className="Brand-web">Brand web</p>

  <h1 className="contact-us" id="#succes">Contact me</h1>
    <p className="phone">  <FontAwesomeIcon  icon={faPhone}></FontAwesomeIcon> +251921225887  </p>

    <br/>

    <p className="phone-line">  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>  danid93575@gmail.com</p>
     
      <hr className="hr-line" />

      <SocialMedia/>



<p className="Social-Networks">Social Networks</p>
      <footer className="footer-web">  
                <p>&copy; 2025 My portfolio Webpage</p>  
            </footer>  
      </div>
    </div>
  );

  function ImageAndTextExample() {
    return (
      <>
        <Card className="Card2">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Text className="card-texts">
              As a passionate web developer, I specialize in creating dynamic
              and responsive websites that provide seamless user experiences.
              With a strong foundation in HTML, CSS, and JavaScript, I combine
              technical expertise with a keen eye for design to bring ideas to
              life on the web.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </>
    );
  }

  function OutlineTypesExample() {
    return (
      <>
        <Button className="button" variant="outline-success">
          <span className="succecc"> Success</span>
        </Button>
      </>
    );
  }
}

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="https://www.facebook.com/share/15jErHS3K3/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://danidan.mystrikingly.com/" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://www.youtube.com/@DaniDan-u4z" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
      <a href="https://dand93575.wixsite.com/danidan-website" target="_blank" rel="noopener noreferrer">
        <FaInstagram />

      </a>
      <a href="https://.tiktok.com/@danidan659" target="_blank" rel="noopener noreferrer">
        <FaTiktok />
      </a>
    </div>
  );
}
// const LocationMap = () => {
//   return (
//     <div className="Google-map">
//       <iframe
//         title="Google-Map"
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128823.5253770334!2d39.48204812068833!3d9.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b836a71a70479%3A0xf212e746bfec4c92!2sEthiopia!5e0!3m2!1sen!2sus!4v1625100000000!5m2!1sen!2sus" 
       
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//       ></iframe>
//     </div>
//   );
// };


export default Home;
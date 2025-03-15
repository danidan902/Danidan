import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,faClock, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaTwitter, FaYoutube, FaTiktok, FaInstagram, } from 'react-icons/fa';
import './Home'
function Contact() {

const alertt = () => {
   
      alert("thankyou for this ");
    
}

  return (
    <div className='top-1'>
       <div class="form-container">
        <h1 className='top-2'>Contact Me</h1>
        <form action="#" method='#Post'>
            <label for="name" >First Name: <span style={{color:"red"}}>*</span></label>
            <input type="text" id="name" name="name" placeholder='Enter First Name' required/>

            <label for="name">Last Name: <span style={{color:"red"}}>*</span></label>
            <input  className='last-name' placeholder='Enter Last Name' type='name' id='name' name='name' required/>

            <label for="email">Email: <span style={{color:"red"}}>*</span></label>
            <input type="email" id="email" placeholder='Enter Email' name="email" required/>

            <label for="phone">Phone Number: <span style={{color:"red"}}>*</span></label>
            <input type="tele" id="phone" placeholder='Enter Phone Number' name="phone" required/>

            <label for="message">Message:  <span style={{color:"red"}}>*</span></label>
            <textarea id="message" name="message" required></textarea>

            <div><input type="submit" value="Submit"/>{alertt} </div>
        </form>
    </div>
    <div>
    <FontAwesomeIcon className='icon-loc' icon={faLocationDot}></FontAwesomeIcon>  <p className='Addis'> Addis Abeba</p>
    <FontAwesomeIcon className='icon-loc2' icon={faClock }></FontAwesomeIcon> <p className='time'>mon-sat- 1am-5pm <br></br>sat 3am-7pm</p>
    <FontAwesomeIcon className='icon-4' icon={faPhone}/> <p className='icon-loc3'>+251921225887</p>
    <FontAwesomeIcon className='icon-6' icon={faEnvelope}/> <p className='icon-5'>danid93575@gmail.com</p>
    </div>
    <div><SocialMedia/></div>
    <div><LocationMap/></div>
  
    
    </div>
  )
}

const LocationMap = () => {
  return (
    <div className="location">
      <iframe
        title="Google-Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.785036783703!2d38.8024949!3d9.0254755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859e664faf0f%3A0x9c4c66fa2e147eba!2sTop%20Training%20Institute!5e0!3m2!1sen!2set!4v1698765432100!5m2!1sen!2set"
        width="680"
        height="450"
        style={{ border: 0,borderRadius: 10, marginTop:60}}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

const SocialMedia = () => {
  return (
    <div className="social2">
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
export default Contact;
import React from "react";
import { FaWhatsapp, FaEnvelope} from "react-icons/fa";
import Tilt from 'react-parallax-tilt'

const Contact = () => {
  

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/9908881764";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:sairamanadam143@gmail.com";
  };

  return (
    <div className="contact-container" style={{fontSize:40}}>
      <h2>Get In Touch</h2>
      <div className="contact-options"  >
        <Tilt>

        <button className="contact-option" onClick={handleWhatsAppClick} style={{height:'20%',width:'70%',  borderRadius:50}}>
          <FaWhatsapp className="icon" style={{height:'25%',width:'25%'}} />
          Contact via WhatsApp
        </button></Tilt>
        <div className="or" style={{fontSize:'auto', alignItems:'center', marginTop:'10%',marginLeft:'35%'}}> <b>OR</b></div>
        <Tilt>
      

      
        <button className="contact-option" onClick={handleEmailClick} style={{height:'20%',width:'70%',marginLeft:'35%', borderRadius:50}}>
          <FaEnvelope className="icon" style={{height:'25%',width:'25%'}} />

          Contact via Email
        </button>
       
        </Tilt>
      </div>

     
    </div>
  );
};

export default Contact;

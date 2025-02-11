import React from "react";
import { FaGithub, FaInstagram, FaWhatsapp , FaYoutube} from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://github.com/RVSS2002/RAMANADAM-VENKATA-SIVA-SAI" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        {/* <a href="https://instagram.com/dhanush_kadiri" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a> */}
        <a href="https://wa.me/9908881764" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
        {/* <a href="https://www.youtube.com/@deepdivers_in" target="_blank" rel="noreferrer">
          <FaYoutube />
        </a> */}
        <a href="mailTo:sairamanadam143@gmail.com" target="_blank" rel="noreferrer">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
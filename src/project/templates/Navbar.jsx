
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import me from '../images/me.jpg'

const Nav = () => {
  const [navbarblur, setnavbarblur] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setnavbarblur(true);
    } else {
      setnavbarblur(false);
    }
  }

  var showMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");

    ham[0].classList.toggle("showNavbar");
  };

  var hideMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.remove("barOne");
    bar[1].classList.remove("barTwo");
    bar[2].classList.remove("barThree");
    ham[0].classList.remove("showNavbar");
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={navbarblur ? "Navbar blur" : "Navbar"}>
      
      <h1
        title="Reload"
        onClick={() => window.location.reload(true)}
        className="Logo"
        
      ><img src={me} alt="na" style={{borderRadius:25, height:50,width:50, marginRight:15}} />
        Venkata siva sai Ramanadam
      </h1>

      <div className="Hamburger" onClick={showMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className="NavbarLinks">
        <li onClick={hideMenu}>
          <Link to="/">
            <AiOutlineHome /> Home
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/AboutMe">
            <BsPerson /> About
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/Projects">
            <BsCodeSlash /> Projects
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/Contact">
            <CgPhone />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

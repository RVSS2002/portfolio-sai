import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type.jsx";
import Tilt from "react-parallax-tilt";
import gif from '../images/gif.gif'
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hello there!</h1>
          <h1>
            I'M <b>Venkata siva sai Ramanadam</b>
          </h1>
          <Type />
          <Link to="/AboutMe">
            <button>
              About Me
              <BsPerson />
            </button>
          </Link>

          <Link to="/Contact">
            <button>
              Contact <CgPhone />
            </button>
          </Link>
        </div>
        <Tilt>
          <img className="Avatar" src={gif} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
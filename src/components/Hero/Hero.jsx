import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = React.useState(false);

  return (
    <div className="hero" id="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "160px" : "190px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal </span>
            <span className="stroke-text">body</span>
          </div>
          <div>
            <span>
              Unleash your potential with customized workout plans, cutting-edge
              equipment, and classes that fit every schedule. Join us today and
              experience the ultimate destination for health, strength, and
              well-being. Let's conquer your goals together!
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delays="4" preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delays="4" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delays="4" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        
        <button className="btn">
          <Link
            onClick={() => setMenuOpened(false)}
            activeClass="active"
            spy={true}
            smooth={true}
            to="testimonials"
          >
            Register
          </Link>
        </button>

        <motion.div
          className="heart-rate"
          initial={{ right: "-3rem" }}
          whileInView={{ right: "12rem" }}
          transition={transition}
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "21rem" }}
          whileInView={{ right: "35rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        <motion.div
          className="calories"
          initial={{ right: "45rem" }}
          whileInView={{ right: "36rem" }}
          transition={transition}
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burn</span>
            <span>229 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

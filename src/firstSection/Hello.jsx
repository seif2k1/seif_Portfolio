import React from "react";
import { Typewriter } from "react-simple-typewriter";
import img from "../images/main_logo.png";
import { ListImages } from "./ListImages";
import "./Hello.css";
import cv from "./Cv.pdf";
import { motion } from "framer-motion";
const Hello = () => {
  return (
    <div className="Sides" id="firstSection">
      <div className="images">
        {ListImages.map((list) => {
          return (
            <motion.img
              animate={{ y: "50px" }}
              transition={{
                duration: 2,
                repeatType: "reverse",
                repeat: Infinity,
              }}
              src={list.img}
              alt=""
            />
          );
        })}
      </div>
      <motion.div
        initial={{ x: "-50px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, type: "spring", stiffness: 120 }}
        className="text"
      >
        {/* 
        <div>
          <h1>Hello,I'm Seif Eddine</h1>
        </div> */}
        <div className="button-animation">
          <button data-text="Awesome" class="button">
            <span class="actual-text">Hello , I'm Seif Eddine</span>
          </button>
        </div>
        <div>
          <h1>
            <Typewriter
              words={["Front End Developer"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={200}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </h1>
        </div>
        <div>
          <h1>Download Resum</h1>
          <a href={cv} download>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className="bi bi-cloud-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"
              />
              <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
            </svg>
          </a>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: "50px" }}
        transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
        className="logo"
      >
        <img src={img} alt="img" />
      </motion.div>
    </div>
  );
};
export default Hello;

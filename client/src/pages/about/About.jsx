import React from "react";
import "./about.css";
import {AnimatePresence, motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
      >
    <div className="about-wrap">
      <div className="about-heading">
        {" "}
        <b>About</b>{" "}
      </div>
      <p className="about-text">
        This is a media resource about the music industry and culture. A
        music enthusiast has designed and engineered this project, which reveals the
        genres of popular music for the listener. My goal is to bring together
        a community of people interested in all things music and highlight
        important industry events. Here I talk about all musical genres in an
        accessible language. Here you can find out not only the latest news, but
        also understand the history of genres and look at familiar artists from
        a new angle.
      </p>
    </div>
    </motion.div>
  );
}

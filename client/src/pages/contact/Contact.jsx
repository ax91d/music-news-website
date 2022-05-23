import "./contact.css";
import React from "react";

export default function Contact() {
  return (
    <div className="contact-wrap">
      <h1 className="contact-heading">Contact</h1>
      <p className="contact-text">
        Our mission is to stand up to the community of people interested in all
        things music and to cover important industry events. We are constantly
        evolving and welcome exceptional communication, any ideas and
        suggestions for development.
      </p>
      <br />
      <p className="contact-text">Author: Akhmet Dossanov</p>
      <p className="contact-text">
        For your releases: <a href="#">dakhmet1@stu.vistula.edu.pl</a>
      </p>
      <p className="contact-text">
        Commercial partnership: <a href="#">dakhmet1@stu.vistula.edu.pl</a>
      </p>
      <p className="contact-text">
        Your suggestions: <a href="#">dakhmet1@stu.vistula.edu.pl</a>
      </p>
    </div>
  );
}

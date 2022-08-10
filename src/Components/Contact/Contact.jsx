import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Slide from "react-reveal/Slide";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y6auxvr",
        "template_9qr936j",
        form.current,
        "omDBgl_ejpW0xRQ-p"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="contact-form" id="Contact">
      <Slide bottom>
        <p className="c-heading">
          <span>Contact </span>
          <span>Me</span>
        </p>
      </Slide>

      <div className="c-info">
        <Slide left>
          <div className="c-flex">
            <div className="c-mini-container">
              <p className="c-icon">
                <HomeIcon color="primary" fontSize="inherit" />
              </p>
              <p className="c-mini-heading">Location</p>
              <p className="c-content">Chennai, TN, India</p>
            </div>

            <div className="c-mini-container">
              <p className="c-icon">
                <CallIcon color="primary" fontSize="inherit" />
              </p>
              <p className="c-mini-heading">Phone</p>
              <p className="c-content">+91 9941776936</p>
            </div>

            <div className="c-mini-container">
              <p className="c-icon">
                <EmailIcon color="primary" fontSize="inherit" />
              </p>
              <p className="c-mini-heading">Email</p>
              <p className="c-content">vickyvijay677@gmail.com</p>
            </div>
          </div>
        </Slide>

        <Slide right>
          <div className="c-form">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                className="user"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="user_email"
                className="user"
                placeholder="Your Email"
              />
              <textarea
                name="message"
                className="user"
                placeholder="Your Message"
              />
              <input
                type="submit"
                value="Send"
                className="button send-button"
              />
              {done ? (
                <span style={{ color: "#00AEEF" }}>
                  Thanks for contacting me!
                </span>
              ) : (
                ""
              )}
            </form>
          </div>
        </Slide>
      </div>

      <button id="top-button" onClick={scrollToTop}>
        <ArrowUpwardIcon /> Top
      </button>
    </div>
  );
};

export default Contact;

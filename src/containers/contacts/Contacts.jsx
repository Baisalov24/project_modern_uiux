import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contacts.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4cpcoec",
        "template_482640h",
        form.current,
        "twiSklDAsh06rUA4n"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form_section" id="contactUs">
      <div className="form_title">
        <h1>Contact Us</h1>
      </div>

      <div className="form_wrapper">
        <div className="form_left">
          <h3 className="color_sec py-4">JT-studio</h3>
          <br />
          <br />
          <p>
            <strong>Email: jtstudio@gmail.com</strong>
          </p>
          <p>
            <strong>Phone: (800) 000 000</strong>
          </p>
        </div>
        <div className="form_right">
          <form ref={form} onSubmit={sendEmail} className="message_form">
            <label className="label">Name</label>
            <input type="text" name="user_name" className="input" />
            <label className="label">Email</label>
            <input type="email" name="user_email" className="input" />
            <label className="label">Message</label>
            <textarea name="message" className="textarea" />
            <input type="submit" value="Send" className="input" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


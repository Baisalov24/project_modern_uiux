import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contacts.css";
import whatsappIcon from "../../assets/whatsapp.png";
import instagramIcon from "../../assets/instagram.png";

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
      <div className="form_wrapper">
        <div className="form_left">
          <div>
            <h3>JT-studio</h3>
            <p>
              <a href="mailto:jetrix.webdev@gmail.com" class="gmail-button">
                <strong>Email: jetrix.webdev@gmail.com</strong>
              </a>
            </p>
            <p>
              <a href="tel:+13475630993">
                <strong>Phone: (347) 563 0993</strong>
              </a>
            </p>
          </div>
          <div className="footer__social">
            <a
              href="https://wa.me/+13475630993"
              target="_blank"
              className="footer__social-link"
            >
              <img src={whatsappIcon}  alt="whatsapp Icom" />
              <p>(347) 563 0993</p>
            </a>
            <a
              href="https://www.instagram.com/jetrix_webdev"
              target="_blank"
              className="footer__social-link"
            >
              <img src={instagramIcon} alt="" /> <p>@JeTrix_webdev</p>
            </a>
          </div>
        </div>
        <div className="form_right">
          <h1>Contact Us</h1>
          <form ref={form} onSubmit={sendEmail} className="message_form">
            <label className="label">Name</label>
            <input type="text" name="user_name" className="input" />
            <label className="label">Email</label>
            <input type="email" name="user_email" className="input" />
            <label className="label">Message</label>
            <textarea name="message" className="textarea" />
            <input type="submit" value="Send" className="contactUs_btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

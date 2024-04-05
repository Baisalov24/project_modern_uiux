import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contacts.css";
import whatsappIcon from "../../assets/whatsapp.png";
import instagramIcon from "../../assets/instagram.png";
import { useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  message: "",
};
const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState(initialFormData);
  const [showMessage, setShowMessage] = useState(false);

  const isFormValid = formData.name && formData.email && formData.message;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }

    setFormData(initialFormData);

    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="form_section" id="contactUs">
      <div className="form_wrapper">
        <div className="form_left">
          <div>
            <h3>JeTrix - Web development</h3>
            <p>
              <a href="mailto:jetrix.webdev@gmail.com" className="gmail-button">
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
              rel="noopener noreferrer"
            >
              <img src={whatsappIcon} alt="whatsapp Icom" />
              <p>(347) 563 0993</p>
            </a>
            <a
              href="https://www.instagram.com/jetrix_webdev"
              target="_blank"
              className="footer__social-link"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="" /> <p>@JeTrix_webdev</p>
            </a>
          </div>
        </div>
        <div className="form_right">
          <h1>Contact Us</h1>
          <form ref={form} onSubmit={handleSubmit} className="message_form">
            <label htmlFor="username" className="label">
              Name
            </label>
            <input
              id="username"
              className="input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="useremail" className="label">
              Email
            </label>
            <input
              id="useremail"
              className="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="usermessage"  className="label">Text</label>

            <textarea
            id="usermessage"
              className="input"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              className="contactUs_btn"
              type="submit"
              disabled={!isFormValid}
            >
              Submit
            </button>
          </form>
          {showMessage && (
            <div>
              <h3 className="formAlert">Form submitted successfully!</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

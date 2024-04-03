import React from "react";
import './Contacts.css'

const Contacts = () => {
  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      <p>
        We love to hear from you. Please drop us a message for any inquiries.
      </p>

      <div className="contact-info">
        <p>
          <i className="icon-phone"></i> +123 456 7890
        </p>
        <p>
          <i className="icon-mail"></i> email@example.com
        </p>
        <p>
          <i className="icon-location"></i> 123 Street, City, Country
        </p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="social-media">{/* <!-- Social media links --> */}</div>
    </section>
  );
};

export default Contacts;
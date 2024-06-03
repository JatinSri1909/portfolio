import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
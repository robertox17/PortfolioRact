import React from 'react';
import './contactMe.css';

function ContactMe() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>I'd love to hear from you! You can reach me through the following channels:</p>
      <ul>
        <li>
          <a href="mailto:robertosegurax17@gmail.com" className="btn">Send an Email</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/roberto-segura-b87525243/" target="_blank" rel="noopener noreferrer" className="btn">Connect on LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/robertox17" target="_blank" rel="noopener noreferrer" className="btn">View My GitHub</a>
        </li>
      </ul>
      <p>Or, if you prefer, you can fill out the form below to send me a message:</p>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  );
}

export default ContactMe;

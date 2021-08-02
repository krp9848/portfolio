import React from 'react'
import './Contact.scss'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="section contact-section">
      <div className="contact-form-container">
        <div className="contact-form-heading">
          <h2>Get In Touch</h2>
        </div>
        <form action="#" className="contact-form">
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Please enter your message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <a href="mailto: abc@example.com" target="_blank" rel="noreferrer">
            Send Message
          </a>
        </form>
      </div>

      <div className="social-media-container">
        <h3>Connect with me</h3>
        <ul className="media-list">
          <li className="media-list-item">
            <a
              href="https://twitter.com/pantkabiraj"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
              <span>Twitter</span>
            </a>
          </li>
          <li className="media-list-item">
            <a
              href="https://github.com/krp9848"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          </li>
          <li className="media-list-item">
            <a
              href="https://www.linkedin.com/in/kabi-raj-pant-173a2217b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact

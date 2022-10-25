import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { Button } from 'react-bootstrap';

// require('dotenv').config()

const SERVICE_ID = process.env.REACT_APP_SERVICE_KEY;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const contactForm = {
  from_name: '',
  reply_to: '',
  message: ''
}

function Contact() {
  const [form, setForm] = useState(contactForm);
  const [alert, setAlert] = useState(null)

  function handleChange(e) {
    e.preventDefault();

    const { name, value } = e.target
    setForm(formData => ({ ...formData, [name]: value }))
  }

  async function sendEmail(e) {
    e.preventDefault();

    if (!form.from_name || !form.reply_to || !form.message) {
      setAlert('Please fill out all fields');
    } else {

      try {
        const response = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
        console.log(response.text);
        setForm(contactForm);
        setAlert('Thank you, your message has been sent!');
      } catch (error) {
        console.log(error.text);
        setForm(contactForm);
        setAlert('Email was not sent please try, again.');
      }
    }
  };

  return (
    <section id='contact-container'>

      <form onSubmit={sendEmail}>

        <div className='form-inputs'>
          {/* <label className='sender-info' htmlFor="sender-name"></label> */}
          <input
            className='sender-info'
            onChange={handleChange}
            type="text"
            name="from_name"
            value={form.from_name}
            placeholder='Name:' />
        </div>

        <div className='form-inputs'>
          {/* <label className='sender-info' htmlFor='email-input'></label> */}
          <input
            className='sender-info'
            onChange={handleChange}
            type="email"
            name="reply_to"
            value={form.reply_to}
            placeholder='Email:' />
        </div>

        <div className='form-inputs'>
          <label htmlFor='message-input'></label>
          <textarea
            placeholder='Would love to hear your thoughts...'
            rows={6}
            onChange={handleChange}
            name="message"
            value={form.message} />
          {/* <input id='submit-button' type="submit" value="Send" /> */}
          <Button className='m-2' variant="outline-light">Send</Button>
        </div>
      </form>
    </section>
  );
};

export default Contact


import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { Button } from 'react-bootstrap';

// require('dotenv').config()

const SERVICE_ID = process.env.REACT_APP_SERVICE_KEY;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const contact_form = {
  from_name: '',
  reply_to: '',
  to_name: 'JPF0628@gmail.com',
  subject: '',
  message: ''
}

function Contact() {
  const [form, setForm] = useState(contact_form);
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
        console.log('e.target', form)
        const response = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
        console.log(response.text);
        setForm(contact_form);
        setAlert('Thank you, your message has been sent!');
      } catch (error) {
        console.log('>>>>>>', error);
        setForm(contact_form);
        setAlert('Email was not sent please try, again.');
      }
    }
  };

  function clearForm() { setForm(contact_form) }

  return (
    <section id='contact-container'>
      <form onSubmit={sendEmail}>
        <div id='greeting-text'>Get in touch!</div>

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
          <select required
            id='subject'
            name='subject'
            className='sender-info'
            onChange={handleChange}>
            {form.subject === '' ? <option value='' disabled selected hidden>What is this about:</option> : ''}
            <option value='' disabled selected hidden>What is this about:</option>
            <option value='employment'>Job Opportunity</option>
            <option value='freelance'>Freelance</option>
            <option value='inquiry'>Talk shop</option>
            <option value='bug'>Report an issue</option>
            <option value='other'>Just wanted to say hi!</option>
          </select>
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
          {/* using Button component submits the wrong data format. error:
          "The 3rd parameter is expected to be the HTML form element or the style selector of form"
          even if the form is passed JSEmail function doesn't accept it. */}
          <input id='submit-button' type="submit" value="Send" />
          <Button className='m-2' variant="outline-dark" onClick={clearForm}>Clear</Button>
        </div>
        {alert &&
          <div className="alert alert-dark" role="alert">
            {alert}
          </div>
        }
      </form>
    </section>
  );
};

export default Contact


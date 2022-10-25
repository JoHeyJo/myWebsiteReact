// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';

// require('dotenv').config()

// const SERVICE_ID = process.env.REACT_APP_SERVICE_KEY;
// const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
// const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

// const contactForm = {
//   sender_name:'',
//   sender_email:'',
//   message:''
// }

// function Contact () {
//   const [form, setForm] = useState(contactForm);

//   function handleChange(e){
//     e.preventDefault();

//     const {name, value} = e.target
//     setForm(formData => ({...formData, [name]: value}))
//   }

//   async function sendEmail(e) {
//     e.preventDefault();
//     try{
//       const response = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
//       console.log(response.text);
//     } catch(error) {
//       console.log(error.text);
//     }
//   };

//   return (
//     <form onSubmit={sendEmail}>
//       <label htmlFor="sender-input">Name</label>
//       <input onChange={handleChange} type="text" name="sender_name" />

//       <label htmlFor='email=input'>Email</label>
//       <input onChange={handleChange} type="email" name="sender_email" />

//       <label htmlFor='message-input'>Message</label>
//       <textarea onChange={handleChange} name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

// export default Contact

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  console.log('form', form)
  console.log('form.current', form.current)
  const sendEmail = (e) => {
    e.preventDefault();

    
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    console.log('form', form)
    console.log('form.current', form.current)
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;

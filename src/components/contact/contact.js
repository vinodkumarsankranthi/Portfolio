import React, { useRef } from 'react'
import './contact.css';
import linkedin from '../../assects/linkedin.png';
import github from '../../assects/github.png';
import instgram from '../../assects/instagram.png';
import twitter from '../../assects/twitter.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5s2eiea', 'template_yv2t56q', form.current, {
        publicKey: '0_T5UIlv720OhI6qo',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('email sent !');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
<section id='contact'>
<span className='contacttitle'>Contact Me</span>
<span className='contactdesc'>Please fill out the form below to discuss any work opportunities.</span>
   <div className='contactcontainer'>

      <form className='contactform' ref={form} onSubmit={sendEmail}>
        <input type='text' className='name' placeholder='Your Name' name='your name'/>
        <input type='email' className='email' placeholder='Your Email' name='your email'/>
        <textarea  className='msg' name='message' rows='5' placeholder='Your message' ></textarea>
        <button typeof='sumit' value='send' className='submitbtn'>Submit</button>
        <div className='links'>
          <a href='https://www.linkedin.com/in/vinodkumar-sankranthi/' target='_blank' rel='noopener noreferrer'>
            <img src={linkedin} alt='LinkedIn' className='link1' />
          </a>
          <a href='https://github.com/vinodkumarsankranthi' target='_blank' rel='noopener noreferrer'>
            <img src={github} alt='GitHub' className='link2' />
          </a>
          <a href='https://www.instagram.com/vinod_chowdhary_18/' target='_blank' rel='noopener noreferrer'>
            <img src={instgram} alt='Instagram' className='link3' />
          </a>
          <a href='https://twitter.com/yourprofile' target='_blank' rel='noopener noreferrer'>
            <img src={twitter} alt='Twitter' className='link4' />
          </a>
        </div>
      </form>

   </div>
</section>
  )
}

export default Contact

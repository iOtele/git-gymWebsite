import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        const emailMessage = document.getElementById('email');
        const message = document.getElementById('emailPrompt');

        if(emailMessage.value === ''){
          emailMessage.classList.add('red')


        }
        emailjs
          .sendForm('service_0hhuvwg', 'template_ef47v3f', form.current, {
            publicKey: 'dihIrGB5RBykDXJVh',
          })
          .then(
            () => {
              console.log('SUCCESS!');  
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
  return (
    <div className="join" id="join">
        <div className="left-j">
            <hr/>
            <div>
            <span className='stroke-text'>READY TO</span>
            <span>LEVEL UP</span>
            </div>

            <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'>WITH US</span>
            </div>
            </div>
        <div className="right-j">
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input id='email' type="email" name="user_email" placeholder='Enter your email address' />
                <button className='btn btn-j'>Join now</button>
            </form>
            <p id='emailPrompt'></p>
        </div>
    </div>
  )
}

export default Join
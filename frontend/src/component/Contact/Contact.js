import React , { useRef, useState }from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../navbar/Navbar'
import './Contact.css'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
const Contact = () => {

  const [name,setname] = useState();
  const [email,setemail] = useState();
  const [contact,setcontact] = useState();
  const [message,setmessage] = useState();
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = 'service_an54p1n';
    const templateId ='template_vew5it1';
    const publicKey ='zzLKrJCPP4vNIHaZI';
   
     const templateparam ={
      from_name:name,
      from_email:email,
    to_name:'ashu',
      message:message,

     };
     emailjs
      .send(serviceId, templateId,templateparam ,publicKey )
      .then(
        (response) => {
          console.log('SUCCESS!');
          setname('');
          setemail('');
          setcontact('');
          setmessage('');
          alert('response send successfully',response);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
        <Navbar/>
        <div class="contact_container">
      <span class="big-circle"></span>
      <img src="img/shape.png" class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
          With great pleasure is proud to introduce new concrete
pavers and tiles that could lead to a breakthrough in the fight against rising
air pollution.
          </p>

          <div class="info">
            <div class="information">
              <img src="img/location.png" class="icon" alt="" />
              <p> C5PH+GJC, Link Road, Dera Village, Dera Mandi, New Delhi, Delhi 110074</p>
            </div>
            <div class="information">
              <img src="img/email.png" class="icon" alt="" />
              <p>Terrafirmagrc@hotmail.com</p>
            </div>
            <div class="information">
              <img src="img/phone.png" class="icon" alt="" />
              
              <p> Off:011-41851337 | </p>
              
              <p>MOB: 9810286522</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <Link to="#">
                <i class="fab fa-facebook-f"></i>
              </Link>
              <Link to="#">
                <i class="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                <i class="fab fa-instagram"></i>
              </Link>
              <Link to="#">
                <i class="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form ref={form} onSubmit={sendEmail} autocomplete="off">
            <h3 class="title">Contact us</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" value={name} placeholder='Enter your name' onChange={(e)=>setname(e.target.value)}/>
          
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" value={email} placeholder='Enter your email' onChange={(e)=>setemail(e.target.value)} />
              
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" value={contact} placeholder='Enter your contact' onChange={(e)=>setcontact(e.target.value)} />
          
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input" value={message} placeholder='Enter your message' onChange={(e)=>setmessage(e.target.value)}></textarea>
    
            </div>
            <input type="submit" value="Send" class="btn" />
          </form>
        </div>
      </div>
    </div>

    <Footer/>
 </div>
  )
}

export default Contact
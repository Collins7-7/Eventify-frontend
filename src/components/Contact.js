import React, { useRef } from 'react'
import '../Contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yzkis55', 
        'template_muamkxe',
         form.current, 
         'WNtk1xCDaDETitO-W')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };

  return (
    <section>
        <div className="super-container">
                <div className="contact-header">
                    <h2 className="new-title">CONTACT US</h2>
                </div>
            <div className="contact-container">
                <div className="contact-image">
                    <img src="" alt="contact icons"></img>
                </div>

                {/* <form className="form"> */}
                <form ref={form} onSubmit={sendEmail} className="form">
                <div className="location">
                        <h4>LOCATION: Nairobi, Kenya: TELEPHONE +2547000002020</h4>
                    </div>

                    <label htmlFor="your_name">YOUR NAME</label>
                    <input type="text" placeholder="Your Name" name="your_name" required/>
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" placeholder="Email" name="email" required/>
                    <label htmlFor="phone">PHONE</label>
                    <input type="text" placeholder="Phone" name="phone" required/>
                    <textarea type="text" name="your_message" cols="30" rows="10" placeholder="YOUR MESSAGE"></textarea>
                    <div className="message-btn">
                        <button type="submit" ><b>SEND</b></button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
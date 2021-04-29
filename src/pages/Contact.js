import React from 'react'
import Title from '../components/Title';
import "../components/Contact.css";


const Contact = () => {
    return (
        <div>
         
              <Title title="Contact" />

              <div className="contact">
                <div className="left-side-contact">
                  <div className="contact-adresa">
                      <h1>Adress</h1>
                      <p>Prishtinë 20000,Kosovë</p>
                        <p>Rr.Rrahman Murati Nr.21</p>
                    </div>
                    <div className="contact-marketing">
                        <h1>Marketing</h1>
                        <p>visit-kosovo@hotmail.com</p>
                        <p>Telephone: <span>+383 45 123 456</span></p>
                    </div>
                    </div>
                    <div className="right-side-contact">
                        <div className="input-area">
                            <label htmlFor="name">Name</label>
                            <input type="text"  id="name"/>
                        </div>
                        <div className="input-area">
                            <label htmlFor="email">Email</label>
                            <input type="Email"  id="email"/>
                        </div>
                        <div className="input-area">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="7">

                            </textarea>
                        </div>
                        <button className="contact-btn">Send</button>
                    </div>
                </div>
            </div>
            
      
    )
}

export default Contact

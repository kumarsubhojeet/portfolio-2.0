import React,{useRef , useState} from 'react'
import '../CSS/contact.css'

import Phone from '../img/phone.png'
import email from '../img/email.png'
import address from '../img/address.png'
import github from '../img/github.png'
import linkedin from '../img/linkedin.png'
import emailjs from 'emailjs-com';

export default function Contact() {
   
    const formRef = useRef()
    const [done , setdone] = useState(false)

    const handleSubmit =  (e)=>{ 
        e.preventDefault()

        emailjs.sendForm('service_b7amzic', 'template_oq3y373', formRef.current, 'user_pvecif4FWZExhw0wAtxdp')
        .then((result) => {
            console.log(result.text);
            setdone(true)
        }, (error) => {
            console.log(error.text);
        });

    }

    return (
        <div>
            <div className="contact_main">
                <div className="contact-bg"></div>
                    <div className="contact_wrapper">
                        
                        <div className="contact_left">
                            <h1 className="contact_title">
                                Contact Me
                            </h1>

                            <div className="contact-info">
                                <div className="c_items">
                                    <img src={Phone} className='c_icon' alt="Error" />
                                    +123 456 789
                                </div>

                                <div className="c_items">
                                    <img src={email} className='c_icon' alt="Error" />
                                    Subhojeet567@gmail.com
                                </div>

                                <div className="c_items">
                                    <img src={address} className='c_icon' alt="Error" />
                                    Wagholi,Pune,Maharastra,India,412207
                                </div>
                               <a href="https://github.com/kumarsubhojeet" without rel="noreferrer" style={{textDecoration:"none"}} target="_blank">
                               <div className="c_items">
                                    <img src={github} className='c_icon' alt="Error" />
                                    Visite Github Page
                                </div>             
                               </a>

                               <div className="c_items">
                                    <img src={linkedin} className='c_icon' alt="Error" />
                                    <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="kumar-subhojit-8750891a8" data-version="v1"><a style={{textDecoration:"none"}} class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/kumar-subhojit-8750891a8?trk=profile-badge">Visit LinkedIn</a></div>
                                </div>

                            </div>
                        </div>

                        <div className="contact_right">
                            <p className="c-desc">
                                <strong>HELLO LET'S TALK ABOUT YOUR NEXT PROJECT</strong>, Get in touch.Always available for freelancing if the right project comes along me.
                            </p>

                            <form ref={formRef} onSubmit={handleSubmit}>
                                <input required type="text" placeholder="Your Name" name="user_name" /><br />
                                <input required type="text" placeholder="Subject" name="user_Subject" /><br />
                                <input required type="email" placeholder="Enter Email" name="user_email" />
                                <textarea required placeholder='Message' name="user_message" rows="5"></textarea>
                            
                            <br /><button> Submit </button>
                            {done && <h4 className="done">Thanks Message Sent :)</h4>}
                            </form>
                        </div>


                    </div>
                
            </div>
        </div>
    )
}

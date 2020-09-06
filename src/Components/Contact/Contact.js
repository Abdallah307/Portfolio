import React from 'react';
import './Contact.css';


const Contact = (props) => {
    return(
        <div id='contact'>
            <h3 className="title">My Studio Location</h3>
            <section className="flexbox-section">
                <p>

                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27030.731483230054!2d35.360244585364335!3d32.12758429505474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cdc5420917a17%3A0x23068472990b8035!2z2LnZgtix2KjYqQ!5e0!3m2!1sar!2s!4v1599349799728!5m2!1sar!2s" 
                width="100%" 
                height="200" 
                frameborder="0" 
                style={{border:0}} 
                allowfullscreen="" 
                aria-hidden="false" 
                tabindex="0">

                </iframe>
                </p>
                <p className="address-txt">
                    143 Al-Montazah Street <br/>
                    Nablus, 5600 QLD Palestine <br/>
                </p>
            </section>
            <hr/>

            <div style={{height:'400px',backgroundColor:'#f1f1f1'}}>

            </div>
            
            <div id="contact-form">
            <iframe id="google-form" src="https://docs.google.com/forms/d/e/1FAIpQLSeHiqX8lfnqcy-dv6M3_Kmevnh_2MbQZldbpTQ0nPLZmYAklg/viewform?embedded=true" width="640" height="700" frameborder="0" marginheight="0" marginwidth="0">جارٍ التحميل…</iframe>
            </div>
            <hr/>
        </div>
    )
}

export default Contact;
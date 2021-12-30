
import { useHistory } from 'react-router-dom';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contacts = () => {
    const history = useHistory();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h9aidmw', 'template_j6a3t4s', form.current, 'user_eSMFjCjC1C4AXtnDjwkCx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
            .then(alert('Your message has been sent! We will be in touch soon.'))
            .then(history.push('/home'));
    };

    return (
        <section id="contacts" className="page">
            <div className="container_12">
                <div className="grid_12">
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2>Get in Touch</h2>
                </div>
                <div className="grid_6">

                    <form id="contact-form" ref={form} onSubmit={sendEmail}>
                        <div className="contact-form-loader"></div>
                        <fieldset>
                            <label className="name">
                                <input type="text" placeholder="Name*:" name="user_name" />
                            </label>
                            <label className="email">
                                <input type="text" placeholder="E-mail*:" name="user_email" />
                            </label>
                            <label className="message">
                                <textarea placeholder="Message*:" name="message" />
                            </label>
                            <div>
                                <input className="btn" type="submit" value="Send" />
                            </div>


                        </fieldset>
                    </form>
                </div>
                <div className="grid_6">
                    {/* <p>24/7 support is on for all <a href="http://www.templatemonster.com/" rel="nofollow" className="color1">premium templates</a>.</p>
                    <p><a href="http://www.templatetuning.com/" rel="nofollow" className="color1">TemplateTuning</a> will help you with customization of the chosen <br /> theme.</p> */}
                 
                    9000 Postcode,<br />
                    City: Varna<br />
                    Telephone: +359 878 948 454<br />
                    E-mail: <a href="https://google.com">nikindtmas1@gmail.com</a>
                </div>
                <div className="clear"></div>
            </div>
            <div className="google-map-api">
                <div id="map-canvas" className="gmap"></div>
            </div>
            <div className="container_12">
                <div className="grid_12">
                    <div className="social-icons">
                        <a href="https://m.twitter.com" className="fa fa-twitter" ></a>
                        <a href="https://www.facebook.com/nikolai.nikolaev.986" className="fa fa-facebook"></a>
                        <a href="https://github.com/nikindtmas1" className="fa fa-github"></a>
                        <a href="https://www.linkedin.com/in/nikolay-nikolaev-4555631a7/" className="fa fa-linkedin"></a>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        </section>
    );
};

export default Contacts;

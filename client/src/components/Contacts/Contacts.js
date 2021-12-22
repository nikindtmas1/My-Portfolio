
const Contacts = () => {

    return (
        <section id="contacts" className="page">
            <div className="container_12">
                <div className="grid_12">
                    <h2>Get in Touch</h2>
                </div>
                <div className="grid_6">
                    <form id="contact-form">
                        <div className="contact-form-loader"></div>
                        <fieldset>
                            <label className="name">
                                <input type="text" name="name" placeholder="Name*:" value="" data-constraints="@Required @JustLetters" />
                                <span className="empty-message">*This field is required.</span>
                                <span className="error-message">*This is not a valid name.</span>
                            </label>
                            <label className="email">
                                <input type="text" name="email" placeholder="E-mail*:" value="" data-constraints="@Required @Email" />
                                <span className="empty-message">*This field is required.</span>
                                <span className="error-message">*This is not a valid email.</span>
                            </label>
                            <label className="phone">
                                <input type="text" name="phone" placeholder="Telephone:" value="" data-constraints="@Required @JustNumbers" />
                                <span className="empty-message">*This field is required.</span>
                                <span className="error-message">*This is not a valid phone.</span>
                            </label>
                            <label className="message">
                                <textarea name="message" placeholder="Message*:" data-constraints='@Required @Length(min=20,max=999999)'></textarea>
                                <span className="empty-message">*This field is required.</span>
                                <span className="error-message">*The message is too short.</span>
                            </label>
                            <div>
                                <a href="#" className="btn" data-type="submit">submit </a>
                            </div>
                        </fieldset>
                        <div className="modal fade response-message">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        <h4 className="modal-title">Modal title</h4>
                                    </div>
                                    <div className="modal-body">
                                        You message has been sent! We will be in touch soon.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="grid_6">
                    {/* <p>24/7 support is on for all <a href="http://www.templatemonster.com/" rel="nofollow" className="color1">premium templates</a>.</p>
                    <p><a href="http://www.templatetuning.com/" rel="nofollow" className="color1">TemplateTuning</a> will help you with customization of the chosen <br /> theme.</p> */}
                 
                    9000 Postcode,<br />
                    Varna,  43.217 / 27.917<br />
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
                        <a href="https://m.twitter.com" className="fa fa-twitter"></a>
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

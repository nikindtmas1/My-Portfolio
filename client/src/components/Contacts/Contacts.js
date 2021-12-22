
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
                    <p>24/7 support is on for all <a href="http://www.templatemonster.com/" rel="nofollow" className="color1">premium templates</a>.</p>
                    <p><a href="http://www.templatetuning.com/" rel="nofollow" className="color1">TemplateTuning</a> will help you with customization of the chosen <br /> theme.</p>
                    The Company Name Inc. <br />
                    9870 St Vincent Place,<br />
                    Glasgow, DC 45 Fr 45.<br />
                    Telephone: +1 800 603 6035<br />
                    FAX: +1 800 889 9898<br />
                    E-mail: <a href="mailto:mail@demolink.org">mail@demolink.org</a>
                </div>
                <div className="clear"></div>
            </div>
            <div className="google-map-api">
                <div id="map-canvas" className="gmap"></div>
            </div>
            <div className="container_12">
                <div className="grid_12">
                    <div className="social-icons">
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-google-plus"></a>
                        <a href="#" className="fa fa-pinterest"></a>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        </section>
    );
};

export default Contacts;

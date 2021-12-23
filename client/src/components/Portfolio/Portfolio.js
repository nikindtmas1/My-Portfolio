
const Portfolio = () => {

    return (
            <section id="portfolio" className="page">
                <div className="container_12">
                    <div className="grid_12">
                        <br />
                        <br />
                        <br />
                        <br />
                        <h2 className="color2">My Portfolio</h2>
                        <div id="filters" className="button-group">
                            <a href="https://github.com/nikindtmas1" className="btn is-checked" data-filter="*">Show all</a>
                            <a href="https://github.com/nikindtmas1/My-Spa-Menu" className="btn" data-filter=".ill">Single Page App</a>
                            <a href="https://github.com/nikindtmas1/My-Cubic-MongoDb" className="btn" data-filter=".photo">Multi Page App</a>
                            <a href="https://github.com/nikindtmas1/Journey-React-Project" className="btn" data-filter=".design">React App</a>
                            <a href="https://react-project-journey.web.app/" className="btn" data-filter=".design">React Web App</a>
                        </div>
                        <div className="el gallery" id="isotope">
                            <div className="element design">
                                <div>
                                    <a href="images/big1.jpg" className="gall-item"><img src="images/gal_img1.jpg" alt="" /><span></span></a>
                                </div>
                            </div>
                            <div className="element photo">
                                <div>
                                    <a href="images/big2.jpg" className="gall-item"><img src="images/gal_img12.jpg" alt="" /><span></span></a>
                                </div>
                            </div>
                            <div className="element  photo">
                                <div>
                                    <a href="images/big3.jpg" className="gall-item"><img src="images/gal_img13.jpg" alt="" /><span></span></a>
                                </div>
                            </div>
                            <div className="clear"></div>
                            <div className="element ill">
                                <div>
                                    <a href="images/big4.jpg" className="gall-item"><img src="images/gal_img4.jpg" alt="" /><span></span></a>
                                </div>
                            </div>
                            <div className="element ill">
                                <div>
                                    <a href="images/big5.jpg" className="gall-item"><img src="images/gal_img15.jpg" alt="" /><span></span></a>
                                </div>
                            </div>
                            <div className="element design">
                                <div>
                                    <a href="images/big6.jpg" className="gall-item"><img src="images/gal_img16.jpg" alt="" /><span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </section>
    );
}

export default Portfolio;
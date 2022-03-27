
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
                            <a href="https://github.com/nikindtmas1" className="btn is-checked" data-filter="*">Dashboard</a>
                            <a href="https://github.com/nikindtmas1/My-Spa-Menu" className="btn" data-filter=".ill">Front End</a>
                            <a href="https://github.com/nikindtmas1/My-Cubic-MongoDb" className="btn" data-filter=".photo">Back End</a>
                            <a href="https://github.com/nikindtmas1/Journey-React-Project" className="btn" data-filter=".design">React App</a>
                            <a href="https://react-project-journey.web.app/" className="btn" data-filter=".design">React Web App</a>
                            {/* <a href="https://my-ecommerce-ee27f.web.app/" className="btn" data-filter=".design">eCommerce</a>
                            <a href="https://rirst-typescript-app.web.app/" className="btn" data-filter=".design">TypeScript</a> */}
                        </div>
                        <div id="filters" className="button-group">
                            <a href="https://my-ispa-massages.web.app/" className="btn" data-filter="*">Massages Menu</a>
                            {/* <a href="https://github.com/nikindtmas1/My-Spa-Menu" className="btn" data-filter=".ill">Front End</a>
                            <a href="https://github.com/nikindtmas1/My-Cubic-MongoDb" className="btn" data-filter=".photo">Back End</a>
                            <a href="https://github.com/nikindtmas1/Journey-React-Project" className="btn" data-filter=".design">React App</a>
                            <a href="https://react-project-journey.web.app/" className="btn" data-filter=".design">React Web</a> */}
                            <a href="https://my-ecommerce-ee27f.web.app/" className="btn" data-filter=".design">eCommerce</a>
                            <a href="https://rirst-typescript-app.web.app/" className="btn" data-filter=".design">TypeScript App</a>
                        </div>
                        <div className="el gallery" id="isotope">
                            <div className="element design">
                                <div>
                                    <a href="images/big11.jpg" className="gall-item"><img src="images/gal_img11.jpg" alt="" /><span></span></a>
                                </div>
                            </div>
                            <div className="element photo">
                                <div>
                                    <a href="images/big21.jpg" className="gall-item"><img src="images/gal_img21.jpg" alt="" /><span></span></a>
                                </div>
                            </div>
                            <div className="element  photo">
                                <div>
                                    <a href="images/big3.jpg" className="gall-item"><img src="images/gal_img3.jpg" alt="" /><span></span></a>
                                </div>
                            </div>
                            <div className="clear"></div>
                            <div className="element ill">
                                <div>
                                    <a href="images/big41.jpg" className="gall-item"><img src="images/gal_img41.jpg" alt="" /><span></span></a>
                                </div>
                            </div>
                            <div className="element ill">
                                <div>
                                    <a href="images/big51.jpg" className="gall-item"><img src="images/gal_img51.jpg" alt="" /><span></span></a>
                                </div>
                            </div>
                            {/* <div className="element design">
                                <div>
                                    <a href="images/big61.jpg" className="gall-item"><img src="images/gal_img61.jpg" alt="" /><span></span></a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </section>
    );
}

export default Portfolio;
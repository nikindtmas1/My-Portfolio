import Navigation from "../Navigation/Navigation";
const Portfolio = () => {

    return (

        <>
            <Navigation />
            <section id="portfolio" class="page">
                <div class="container_12">
                    <div class="grid_12">
                        <h2 class="color2">My Portfolio</h2>
                        <div id="filters" class="button-group">
                            <a href="/" class="btn is-checked" data-filter="*">Show all</a>
                            <a href="/" class="btn" data-filter=".ill">Illustration</a>
                            <a href="/" class="btn" data-filter=".photo">Photography</a>
                            <a href="/" class="btn" data-filter=".design">Design</a>
                        </div>
                        <div class="el gallery" id="isotope">
                            <div class="element design">
                                <div>
                                    <a href="images/big1.jpg" class="gall-item"><img src="images/gal_img1.jpg" alt="" /><span></span></a>
                                </div>
                            </div>
                            <div class="element photo">
                                <div>
                                    <a href="images/big2.jpg" class="gall-item"><img src="images/gal_img2.jpg" alt="" /><span></span></a>
                                </div>
                            </div>
                            <div class="element  photo">
                                <div>
                                    <a href="images/big3.jpg" class="gall-item"><img src="images/gal_img3.jpg" alt="" /><span></span></a>
                                </div>
                            </div>
                            <div class="clear"></div>
                            <div class="element ill">
                                <div>
                                    <a href="images/big4.jpg" class="gall-item"><img src="images/gal_img4.jpg" alt="" /><span></span></a>
                                </div>
                            </div>
                            <div class="element ill">
                                <div>
                                    <a href="images/big5.jpg" class="gall-item"><img src="images/gal_img5.jpg" alt="" /><span></span></a>
                                </div>
                            </div>
                            <div class="element design">
                                <div>
                                    <a href="images/big6.jpg" class="gall-item"><img src="images/gal_img6.jpg" alt="" /><span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </section>
        </>
    );
}

export default Portfolio;
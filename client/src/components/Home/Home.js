
const HomePage = () => {

    return (
        <header id="home" className="page">
        <div className="navigation single-page-nav">
          <div className="container_12">
            <div className="grid_12">
              <h1 className="logo">
                <a href="index.html">N. Nikolaev</a>
              </h1>
              <nav>
                <ul>
                  <li><a href="#home" className="current">Home</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                  <li><a href="#contacts">Contacts</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div id="camera_wrap">
          <div data-src="images/slide-1.jpg">
            <div className="caption fadeIn">Your Web Developer <span className="bull"></span> Front End  <span className="bull"></span> Back End</div>
          </div>
          <div data-src="images/slide-2.jpg">
            <div className="caption fadeIn">Impressive Web development, Suitable for Cool Web Projects</div>
          </div>
          <div data-src="images/slide-3.jpg">
            <div className="caption fadeIn">Web Development that Work for Your Benefits</div>
          </div>
        </div>
      </header>
    );
}

export default HomePage;
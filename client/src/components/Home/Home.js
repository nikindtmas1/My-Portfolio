

const HomePage = () => {

    return (
        <>
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

        <div className="pad-1">
            <div className="container_12">
              <div className="grid_12">
                <h2>About Me
                  <span>THE BRIEF INTRODUCTION OF MYSELF</span>
                </h2>
                <p className="offset__1">Lorem ipsum dolor sit tetur dipiscing elit. In mollis erat mattis neque facilisis, situltries wertolio dasererat rutrum. Lorem ipsum dolor sit tetur dipiscing elit.  Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus</p>
                <img src="/images/page-img_11.jpeg" alt="" className="fleft" />
                <div className="extra_wrapper">
                  <div className="text-1">
                    Nikolay Nikolaev
                  </div>
                  <div className="text-2 color1">
                    <a href="/">Developer</a> &bull;
                    <a href="/">Front End</a> &bull;
                    <a href="/">Back End</a>
                  </div>
                  <p>Follow the link to learn more about this <a rel="nofollow" href="http://blog.templatemonster.com/free-website-templates/" className="color1">goodie</a>.  </p>
                  <p>You can find <a rel="nofollow" href="http://www.templatemonster.com/category/personal-pages/" className="color1">personal pages themes</a> in the same name category at TemplateMonster.com.</p>
                  Lorem ipsum dolor sit tetur dipiscing elit. In mollis erat mattis neque facilisis, situltries wertolio dasererat rutrum. Lorem ipsum dolor sit tetur dipiscing elit.  <br />
                  <a href="/" className="btn">Download Resume</a>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </>
    );
}

export default HomePage;
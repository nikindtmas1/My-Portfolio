import { Link } from 'react-router-dom';

const HomePage = () => {

    return (
        <>
        <div id="camera_wrap">
            <div data-src="images/slide-1.jpg">
                <div className="caption fadeIn">Your Web Developer <span className="bull"></span> Front End  <span className="bull"></span> Back End</div>
            </div>
            <div data-src="images/slide-2.jpg">
                <div className="caption fadeIn">Impressive Web development, Suitable for Profesional Web Projects</div>
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
                <p className="offset__1">I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. In my last job, this passion led me to challenge myself daily and learn new skills that helped me to do better work. For example, I taught myself how to use Programing with JavaScript to improve the quality of our web site. I soon became the go-to person for any web projects.</p>
                <img src="/images/page-img_11.jpeg" alt="" className="fleft" />
                <div className="extra_wrapper">
                  <div className="text-1">
                    Nikolay Nikolaev
                  </div>
                  <div className="text-2 color1">
                    <a href="https://github.com/nikindtmas1">Developer</a> &bull;
                    <a href="https://react-project-journey.web.app/">Front End</a> &bull;
                    <a href="https://github.com/nikindtmas1/My-Cubic-MongoDb">Back End</a>
                  </div>
                  {/* <p>Follow the link to learn more about this <a rel="nofollow" href="http://blog.templatemonster.com/free-website-templates/" className="color1">goodie</a>.  </p>
                  <p>You can find <a rel="nofollow" href="http://www.templatemonster.com/category/personal-pages/" className="color1">personal pages themes</a> in the same name category at TemplateMonster.com.</p> */}
                  I am ambitious and driven. I thrive on challenge and constantly set goals for myself, so I have something to strive toward. I’m not comfortable with settling, and I’m always looking for an opportunity to do better and achieve greatness. In my previous role, I was awarded three times in less than two years.  <br />
                  <Link to='/cv/cv-Nikolay.docx' className="btn" target="_blank" download>Download CV</Link>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </>
    );
}

export default HomePage;
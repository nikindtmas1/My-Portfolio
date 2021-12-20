import Navigation from "../Navigation/Navigation";

const HomePage = () => {

    return (
        
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
     
    );
}

export default HomePage;
import { Route, Switch } from 'react-router-dom';

import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/Home/Home";
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <div className="texture">
        <header id="home" className="page">
          <Navigation />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/portfolio' component={Portfolio} />
          </Switch>
        </header>

        <section className="content">
          <div className="ic">More Website Templates @ TemplateMonster.com - October 20, 2014!</div>
          <div className="pad-1">
            <div className="container_12">
              <div className="grid_12">
                <h2>About Me
                  <span>THE BRIEF INTRODUCTION OF MYSELF</span>
                </h2>
                <p className="offset__1">Lorem ipsum dolor sit tetur dipiscing elit. In mollis erat mattis neque facilisis, situltries wertolio dasererat rutrum. Lorem ipsum dolor sit tetur dipiscing elit.  Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus</p>
                <img src="images/page-img_1.jpg" alt="" className="fleft" />
                <div className="extra_wrapper">
                  <div className="text-1">
                    Nikolay Nikolaev
                  </div>
                  <div className="text-2 color1">
                    <a href="/">Photographer</a> &bull;
                    <a href="/">Coder</a> &bull;
                    <a href="/">Designer</a>
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
        </section>
      </div>

      <Footer />

    </>
  );
}

export default App;

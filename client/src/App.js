import { Route, Switch } from 'react-router-dom';

import Navigation from "./components/Navigation/Navigation";
import HomePage from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <div className="texture">
        <header id="home" className="page">
          <Navigation />
        </header>

        <section className="content">
          <div className="ic">More Website Templates @ TemplateMonster.com - October 20, 2014!</div>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/skills' component={Skills} />
            <Route path='/experience' component={Experience} />
            <Route path='/testimonials' component={Testimonials} />
          </Switch>
        </section>
      </div>

      <Footer />

    </>
  );
}

export default App;

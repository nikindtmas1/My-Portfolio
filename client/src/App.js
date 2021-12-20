import { Route, Switch } from 'react-router-dom';

import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/Home/Home";
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="texture">
      <header id="home" className="page">
        <Navigation />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/portfolio' component={Portfolio} />
        </Switch>
      </header>
    </div>
  );
}

export default App;

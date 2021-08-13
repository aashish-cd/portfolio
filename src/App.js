import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Navbar from './pages/navbar';
import NotFound from './pages/notfound';
import Footer from './pages/footer';

const App = () => {
  return (
    <div className='animate'>
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route exact path='/resume' component={Resume}></Route>
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

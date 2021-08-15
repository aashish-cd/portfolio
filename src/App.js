import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Navbar from './pages/navbar';
import Footer from './pages/footer';
import { Container } from '@material-ui/core';
import SingleAbout from './pages/singleAbout';

const App = () => {
  return (
    <Container>
      <Router>
        <Navbar />
        <div className='mt-5 pt-5'>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route exact path='/about/:id' component={SingleAbout} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </Container>
  );
};

export default App;

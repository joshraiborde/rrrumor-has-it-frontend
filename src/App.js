import './App.css';
import './stylesheet/navbar.css'
import './stylesheet/footer.css'
import React from 'react';
import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import PostRumour from './components/PostRumour.js';
import Splash from './components/Splash.js';
import Comments from './components/PostComment';
import About from './components/AboutUs';
import Footer from './components/footer';
import Contact from './components/ContactUs';

function App() {
  return (
  <BrowserRouter>
    <nav>
      <div className="menu-icon"> <span className="fas fa-bars"></span></div>
          <div className="logo">Rumour Has It . . .</div>
              <div class="nav-items">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/post/rumour">Post Rumour</Link></li>
                <li><Link to="/about/us">About us</Link></li>
                <li><Link to="/contact/us">Contact us</Link></li>

                </div>
                </nav>
      <Route exact path="/" component={Splash}/>
        <Switch>
          <Route path="/home" render={(props) => <Home {...props} key={Date.now()}/>}></Route>
          <Route path="/post/rumour"><PostRumour/></Route>
          <Route path="/comments"><Comments/></Route>
          <Route path="/about/us"><About/></Route>
          <Route path="/contact/us"><Contact/></Route>
        </Switch>
        <Footer/>
        <section>

</section>

      </BrowserRouter>
  );
}

export default App;

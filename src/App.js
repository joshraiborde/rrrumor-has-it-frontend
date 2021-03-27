import './App.css';
import './stylesheet/navbar.css'
import React from 'react';
import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import PostRumour from './components/PostRumour.js';
import Splash from './components/Splash.js';
import Comments from './components/PostComment';

function App() {
  return (
  <BrowserRouter>
    <nav>
      <div className="menu-icon"> <span className="fas fa-bars"></span></div>
          <div className="logo">Rumour Has It...</div>
              <div class="nav-items">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/post/rumour">Post Rumour</Link></li>
                <li><Link to="/comments">Rumour Faqs</Link></li>
                </div>
                </nav>
      <Route exact path="/" component={Splash}/>
        <Switch>
          <Route path="/home" render={(props) => <Home {...props} key={Date.now()}/>}></Route>
          <Route path="/post/rumour"><PostRumour/></Route>
          <Route path="/comments"><Comments/></Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;

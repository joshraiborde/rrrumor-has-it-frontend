
import './App.css';
import './stylesheet/navbar.css'
import React from 'react';
import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';
import Home from './components/home.js';
import PostRumour from './components/postRumour.js';
import Splash from './components/splash.js';



function App() {
  return (
    <BrowserRouter>
    <nav>
    <div className="menu-icon">
<span className="fas fa-bars"></span></div>
<div className="logo">
PostRumour</div>
<div class="nav-items">

<li><Link to="/home">Home</Link></li>
<li><Link to="/post/rumour">Post Rumour</Link></li>


</div>
<div className="search-icon">
<span className="fas fa-search"></span></div>
<div className="cancel-icon">
<span className="fas fa-times"></span></div>
<form method="POST" action="/users/search">
      <input type="search" className="search-data" name="search" placeholder="Search Rumour" required/>
      <button type="submit" className="fas fa-search"></button>
    </form>
</nav>
 <Route exact path="/" component={Splash}/>
<Switch>
          <Route path="/home">
<Home/>
          </Route>
          <Route path="/post/rumour">
<PostRumour/>
          </Route>



        </Switch>
      </BrowserRouter>
  );
}

export default App;

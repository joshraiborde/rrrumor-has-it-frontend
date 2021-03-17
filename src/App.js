
import './App.css';
import './stylesheet/navbar.css'
import React from 'react';
import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';
import Home from './components/home.js';
import PostRumour from './components/postRumour.js';
import MyRumour from './components/myRumour.js';


function App() {
  return (
    <BrowserRouter>
    <nav>
    <div class="menu-icon">
<span class="fas fa-bars"></span></div>
<div class="logo">
PostRumour</div>
<div class="nav-items">

<li><Link to="/home">Home</Link></li>
<li><Link to="/post/rumour">Post Rumour</Link></li>
<li><Link to="/my/rumour">My Rumours</Link></li>


</div>
<div class="search-icon">
<span class="fas fa-search"></span></div>
<div class="cancel-icon">
<span class="fas fa-times"></span></div>
<form method="POST" action="/users/search">
      <input type="search" class="search-data" name="search" placeholder="Search Rumour" required/>
      <button type="submit" class="fas fa-search"></button>
    </form>
</nav>

<Switch>
          <Route path="/home">
<Home/>
          </Route>
          <Route path="/post/rumour">
<PostRumour/>
          </Route>
          <Route path="/my/rumour">
<MyRumour/>
          </Route>


        </Switch>
      </BrowserRouter>
  );
}

export default App;

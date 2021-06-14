import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Link, Redirect} from '@reach/router'
import './App.css';
import Main from './views/Main'
import Add from './components/Add'
import Game1 from './components/game1';
import Game2 from './components/game2';
import Game3 from './components/game3';

function App() {

  return (
    <div className="App">
      <div className="mainheader">
      <Link className="headerlink" to="/players/list">Manage Players</Link> |
      <Link className="headerlink" to="/status/game/1">Manage Player Status</Link>
      </div>
      <Router>
        <Redirect from="/" to="/players/list"/>
        <Main path="/players/list" />
        <Game1 path="/status/game/1" />
        <Game2 path="/status/game/2" />
        <Game3 path="/status/game/3" />
        <Add path="/players/addplayer" />
      </Router>
    </div>
  );
}

export default App;

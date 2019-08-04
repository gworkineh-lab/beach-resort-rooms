import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

function App() {
  return (
    <>
      <Navbar className="nav-bar" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/single-room" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

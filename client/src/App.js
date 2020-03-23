import React, { Fragment, } from 'react';
import './App.css';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Container> 
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </Fragment>
  );
}

export default App;

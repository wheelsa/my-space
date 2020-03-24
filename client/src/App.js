import React, { Fragment, } from 'react';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';

import NoMatch from './pages/NoMatch';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import ProtectedRoute from './components/ProtectedRoute';
import FetchUser from './components/FetchUser';

function App() {
  return (
    <Fragment>
      <Navbar />
      <FetchUser> 
      <Container> 
        <Switch>
          <ProtectedRoute Route exact path='/' component={Home} />
          <ProtectedRoute Route exact path='/profile' component={Profile} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
      </FetchUser>
    </Fragment>
  );
}

export default App;

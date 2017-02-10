import React from 'react'
import {Router,Route,browserHistory} from 'react-router'
import BulletinBoard from '../components/BulletinBoard'

module.exports = (
      <Router history={browserHistory}>
        <Route path='/' component={BulletinBoard} />
        <Route path='*' component={BulletinBoard} />
      </Router>
);

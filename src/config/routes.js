import React from 'react'
import {Router,Route,browserHistory} from 'react-router'
import BulletinBoard from '../components/BulletinBoard'
import StickyNote from '../components/StickyNote'

module.exports = (
      <Router history={browserHistory}>
        <Route path='/' component={BulletinBoard}>
      </Route>
      </Router>
);

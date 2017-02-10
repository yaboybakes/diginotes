import React from 'react'
import {Router,Route,browserHistory} from 'react-router'
import BulletinBoard from '../components/BulletinBoard'
import StickyNote from '../components/StickyNote'
import E404 from '../components/404'

module.exports = (
      <Router history={browserHistory}>
        <Route path='/' component={BulletinBoard}>
      </Route>
      </Router>
);

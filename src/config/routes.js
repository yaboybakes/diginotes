import React from 'react'
import {Router,Route,browserHistory,IndexRoute} from 'react-router'
import BulletinBoard from '../components/BulletinBoard'


module.exports = (
      <Router history={browserHistory}>
        <Route path='/' component={BulletinBoard}>
          <IndexRoute component={BulletinBoard}/>
        </Route>
      </Router>
);

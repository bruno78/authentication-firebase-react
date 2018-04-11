import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';
import SignOut from './SignOut';
import SignIn from './SignIn';

const Navigation = ({ authUser }) =>
  <div>
    { authUser ?
      <NavigationAuth /> :
      <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
  <div>
    <ul>
      <li><Link to={routes.LANDING}>Landing</Link></li>
      <li><Link to={routes.HOME}>Home</Link></li>
      <li><Link to={routes.ACCOUNT}>Account</Link></li>
      <li><SignOut /></li>
    </ul>
  </div>

const NavigationNonAuth = () =>
  <div>
    <ul>
      <li><Link to={routes.LANDING}>Landing</Link></li>
      <li><Link to={routes.SIGN_IN}>SignIn</Link></li>
    </ul>
  </div>

export default Navigation;
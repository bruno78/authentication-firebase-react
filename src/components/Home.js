import React from 'react';
import withAuthorization from './withAuthorization';

const HomePage = () =>

    <div>
        <h1>Home</h1>
        <p>The home page is accessible by every signed in user</p>
    </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
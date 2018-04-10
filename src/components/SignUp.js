import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase';

import * as routes from '../constants/routes';



/**
 * SIGN UP PAGE COMPONENT
 * @param {} param0 
 */
const SignUpPage = ({ history }) => 

    <div>
        <h1>SignUp</h1>
        <SignUpForm history={history} />
    </div>

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
}

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
})




/**
 *  SIGNUP FORM COMPONENT
 */
class SignUpForm extends Component {
    state = {
        ...INITIAL_STATE
    }

    onSubmit = (event) => {
        const {
            username,
            email, 
            passwordOne,
        } = this.state;

        const {
            history,
        } = this.props;


        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState(() => ({ ...INITIAL_STATE }));
                history.push(routes.HOME);

                // TODO: Insert POST for user in database here
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            })
        
        event.preventDefault();
    }

    render() {

        const {
            username, 
            email,
            passwordOne,
            passwordTwo,
            error
        } = this.state

        const isInvalid = 
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return ( 
            <form onSubmit={this.onSubmit}>

                <input
                value={username}
                onChange={event => this.setState(byPropKey('username', event.target.value))}
                type="text"
                placeholder="Full Name"
                />
                <input
                value={email}
                onChange={event => this.setState(byPropKey('email', event.target.value))}
                type="text"
                placeholder="Email Address"
                />
                <input
                value={passwordOne}
                onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                type="password"
                placeholder="Password"
                />
                <input
                value={passwordTwo}
                onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                type="password"
                placeholder="Confirm Password"
                />
                <button disabled={isInvalid} type="submit">
                Sign Up
                </button>

                { error && <p>{error.message}</p> }

            </form>
         )
    }
}



/**
 * SIGN UP LINK COMPONENT
 */
const SignUpLink = () =>
    <p>
        Don't have an aaccount?
        {' '}
        <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>

export default withRouter(SignUpPage);
export { SignUpLink, SignUpForm };
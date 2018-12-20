import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase';


const SignUp = ({ history }) =>
  <div>
    <h1>Register</h1>
    <SignUpForm history={history} />
  </div>
const INITIAL_STATE = {
  displayName: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = 
      INITIAL_STATE
    
  }

  onSubmit = (event) => {
    const {
      email,
      passwordOne,
    } = this.state;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(() => {
        this.setState(INITIAL_STATE );
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
    // pushToHistory();

  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;
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
          placeholder="Username"
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
                { error && <p>{error.message}</p> }

        <button className="product-info-button" disabled={isInvalid} type="submit" onClick={this.onSubmit}>
          <h3>Register</h3>
        </button>
          
      
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <button className="product-info-button" disabled={this.isInvalid} type="submit">
          <h3>Sign Up</h3>
        </button>
  </p>

export default withRouter(SignUp);

export {
  SignUpForm,
  SignUpLink,
};

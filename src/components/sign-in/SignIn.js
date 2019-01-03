import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase';




const SignIn = ({ history }) =>
  <div>

    <div >
      <h1>Sign in</h1>
        <SignInForm history={history} />
    </div>

  </div>

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});


class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = 
      INITIAL_STATE
  }

  onSubmit = event => {
    this.props.history.push('/products')


    const {
      email,
      password,
    } = this.state;

    auth.doSignInWithEmailAndPassword(email, password)

      // .then((INITIAL_STATE) => {
      //   this.setState( ...INITIAL_STATE );
      // })
      // .catch(error => {
      //   this.setState(byPropKey('error', error));
        
      // });

    event.preventDefault();
    // pushToHistory();

  }
  render() {
    const {
      email,
      password,
      error,
    } = this.state;

 

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
      
        <button className="product-info-button" type="submit" >
          <h3>Sign In</h3>
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignIn);

export {
  SignInForm,
};

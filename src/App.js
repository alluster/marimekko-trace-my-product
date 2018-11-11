import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
// import * as routes from './constants/routes';
import './styles/index.css'
import { firebase } from './firebase';

import Products from './views/products/Products'
import Product from './views/product/Product'
import Splash from './views/splash/Splash'
import SignInPage from './views/sign-in/SignInPage'
import PasswordForgetPage from './components/sign-in/PasswordForget';
import Account from './views/account/Account';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {

      if(authUser) {
        this.setState({ authUser }, 
        () => {
          this.props.history.push('/')
        })
        
      }
      else{  
        this.setState({ authUser: null })
      }
    });
  }
  
  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.state.authUser !== null
          ? <Component {...props} />
          : <Redirect to='/signin' />
      )} />
    )
    return (
      <div>

          <Switch>
            <Route exact path='/' component={Splash}/>
            <Route exact path='/account' component={Account}/>

            <Route exact path='/pw-forget' component={PasswordForgetPage}/>
            <PrivateRoute exact path='/products' component={Products}/>
            <Route exact path='/signin' component={SignInPage } authUser={this.state.authUser}/>

            <Route exact path='/products/:slug' component={Product}/>


    

          </Switch>
      </div>
    )
  }
}
export default withRouter(App);

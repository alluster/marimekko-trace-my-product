import React, { Component } from 'react';

import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-in/SignUp'


import TopNavigation from '../../components/navigation/TopNavigation'
import BottomNavigation from '../../components/navigation/BottomNavigation'

class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          register: false,
          signIn: true,
        }
        this.onClick = this.onClick.bind(this)

      }
      onClick() {
        this.setState(prevState => ({
          register: !prevState.register
        }));
      }
 render() {
    const buttonText =  this.state.register ? "Sign in" : "Register"
    const text =  this.state.register ? "Have an Account already?" : "Don't have an account yet?"



const Register = () =>
        <SignUp />

const Login = () =>
        <SignIn />


    return (
      <div >    
          <TopNavigation />
            <BottomNavigation />
            <div className="container">
                <div className="sign-in-page-container">
                    { this.state.register ? <Register /> : <Login /> }
                    <p className="margin-top-25">{text}</p>
                    
                    <h3 onClick={this.onClick}>{buttonText}</h3>
                </div>
           
            </div>
     


      </div>
    )
  }
}

export default SignInPage;

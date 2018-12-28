import React, { Component } from 'react';

import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-in/SignUp'

import didYouKnow from './didYouKnow.png'

import TopNavigation from '../../components/navigation/TopNavigation'
import BottomNavigation from '../../components/navigation/BottomNavigation'

class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          register: false,
          signIn: true,
          showInstallMessage: false,
        }
        this.onClick = this.onClick.bind(this)
        this.skip = this.skip.bind(this)

      }
      onClick() {
        this.setState(prevState => ({
          register: !prevState.register
        }));
      }
      skip() {
        this.setState(prevState => ({
          showInstallMessage: !prevState.showInstallMessage
        }));
      }
      componentDidMount() {
        const isIos = () => {
          const userAgent = window.navigator.userAgent.toLowerCase();
          return /iphone|ipad|ipod/.test( userAgent );
        }
        // Detects if device is in standalone mode
        const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);
        
        // Checks if should display install popup notification:
        if (isIos() && !isInStandaloneMode()) {
          this.setState({ showInstallMessage: true });
        }
      }
 render() {
    const buttonText =  this.state.register ? "Sign in" : "Register"
    const text =  this.state.register ? "Have an Account already?" : "Don't have an account yet?"
    const installMessage = <div>
    <h3>We noticed that you haven't downloaded this app. You can do it from your menu!</h3>
    <img src={didYouKnow} alt="You can also download this app" />
    <button onClick={this.skip}>Skip this time</button>
  </div>


const Register = () =>
        <SignUp />

const Login = () =>
        <SignIn />


    return (
      <div >
        {
          this.state.showInstallMessage ? <div>
          <TopNavigation />
            <BottomNavigation />
            <div className="container">
                <div className="sign-in-page-container">
                    { this.state.register ? <Register /> : <Login /> }
                    <p className="margin-top-25">{text}</p>
                    
                    <h3 onClick={this.onClick}>{buttonText}</h3>
                   

                </div>
           
            </div>
            </div> :
              <div className="sign-in-page-container">
              {installMessage}            
            </div>
            
        }   
     


      </div>
    )
  }
}

export default SignInPage;

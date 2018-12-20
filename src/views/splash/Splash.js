import React, { Component } from 'react';

import Hero from '../../components/hero/Hero'

class Splash extends Component {

  constructor(props) {
    super(props);
    this.state = {
     
     }
  }
   
    componentDidMount() {
      setTimeout(() => {
        this.props.history.push("/products")
      }, 1000);
    }
      
    
  render() {
  
    const { heroBody, heroButtonText, heroImage, heroHeader } = this.state

    return (    
      <div className="splash-container">
      <Hero 
        heroImage={heroImage}
        heroHeader={heroHeader}
        heroBody={heroBody}
        heroButtonText={heroButtonText}
        />

      </div>
    )
  }
}
export default Splash;

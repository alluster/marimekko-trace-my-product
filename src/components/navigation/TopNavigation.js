import React, { Component } from 'react';
import { Link } from 'react-router-dom' 
import { Row, Col } from 'react-flexbox-grid';
import Logo from './logo.png'

class TopNavigation extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
    }
  }
  render() { 
    return (
       <div className="top-navbar">
            <Row middle="md">
                <Col className="logo-image-top-nav" sm={12}>
                        <img className="logo-image-top-nav" src={Logo} alt="logo"/>
                        <Link to="/home" className="top-camera-icon">
                            <span className="nav-icon-top-nav-camera">
                            <svg aria-hidden="true" data-prefix="fas" data-icon="camera" height="14px" width="14px" className="svg-inline--fa fa-camera fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path></svg>                    
                            </span>
                </Link>
                </Col>
            </Row>
      </div>  
    )
  }
}
export default TopNavigation;

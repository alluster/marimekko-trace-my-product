import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Logo from '../../logo.png'
import { ClipLoader } from 'react-spinners';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  
  render() { 

    return (
 
        <div className="hero-image"   >
            <div className="content">
                <Grid>
                    <Row middle="md">
            
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <img  className="logo" src={Logo} alt="logo" />
                            <p  className="margin-top-25 margin-bottom-25">Product Transparency</p>
                            <ClipLoader
        //   className={override}
          sizeUnit={"px"}
          size={50}
          color={'#000000'}
          loading={this.state.loading}
        />
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    )
  }
}
export default Hero;

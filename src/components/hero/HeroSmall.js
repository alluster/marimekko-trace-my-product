import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class HeroSmall extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() { 
    return (
        <div className="hero-small">
            <div className="content-small container">
                <Grid>
                    <Row middle="md">
                        <Col xs={12} sm={12} md={12} lg={5}>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={5}>
                        <h1>We accelerate your business with digital transformation</h1>
                            <p  className="margin-top-50">Creativity meets Technology</p>
                            <button className="margin-top-50 button-outline-light">Explore</button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    )
  }
}
export default HeroSmall;

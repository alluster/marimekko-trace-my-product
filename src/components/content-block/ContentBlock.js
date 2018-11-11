import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class ContentBlock extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
    }
  }
  render() { 
   
    return (
        <div className="margin-top-100">
            <Grid>
                <Row >
                    <Col xs={12} sm={12} md={12} lg={5}>
                        <p className="lighter">{this.props.testimonialDescription}</p>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={7}>
                    <h2>{this.props.testimonial}</h2>
                        <p className="margin-top-100">{this.props.testimonialBody}</p>
                    </Col>
                </Row>
            
            </Grid>
            {
                this.props.image ? 
                <div className="margin-top-100 content-block-image-container">
                <img className="content-block-image" src={this.props.image} alt="" />
            </div>
            :
            null
            }
            
        </div>
     
    )
  }
}
export default ContentBlock;

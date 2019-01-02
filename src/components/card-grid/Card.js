import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-flexbox-grid';

class Card extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
    }
  }
  
render() { 
      return (
      <Link to={ `/products/${this.props.data.fields.productId}` }>
          <div className="card margin-bottom-50">
              <Row>
                  <Col xs={4} sm={4} md={4} lg={4}>
                      <div className="card-image-container">
                          <img className="card-image" src={this.props.data.fields.image.fields.file.url} alt="product" />
                      </div>
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={8} middle="md">
                      <div className="margin-top-25">
                          <h2>{this.props.data.fields.name}</h2> 
                          <div className="margin-top-10 margin-bottom-10">
                              <p><span className="strong">Bought: </span>{this.props.data.fields.bought}</p>
                              <p className="margin-top-5"><span className="strong">From: </span>{this.props.data.fields.boughtFrom}</p>
                              <p className="margin-top-5"><span className="strong">Product Id: </span>{this.props.data.fields.productId}</p>
                          </div>
                      </div> 
                  </Col>
              </Row>
          </div>
      </Link>
    )
  }
}
export default Card;

import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ProductTrack from '../product-track/ProductTrack';
import 'font-awesome/css/font-awesome.min.css';

class ProductInfoCard extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
    }
  }
  
render() { 

      return (
          <div   style={{ paddingBottom: "20px" }}className="card margin-bottom-50">
              <Row >
                {
                  this.props.showDetails ? 
                 <i className="fa fa-close close" onClick={this.props.onClick} />
                :
                null
                }
                  <Col className="text-container" xs={12} sm={12} md={12} lg={12} >
                  {
                                this.props.showDetails ? null: <div> <h2  onClick={this.props.onClick}>{this.props.data.name}</h2>
                                <div className="margin-top-10 margin-bottom-5">
                                        <p><span className="strong">Bought: </span>{this.props.data.bought}</p>
                                        <p className="margin-top-5"><span className="strong">From: </span>{this.props.data.boughtFrom}</p>
                                        <p className="margin-top-5"><span className="strong">Product Id: </span>{this.props.data.productId}</p>
                                    </div> 
                                    </div>
                            }

                          {
                            !this.props.showDetails ?  <button 
                            onClick={this.props.onClick}
                            className="product-info-button"><h4>View Product Details</h4>
                          </button>
                          : null
                        
                          }
                          
                            {
                                this.props.showDetails ? <ProductTrack data={this.props.data} /> : null 
                            }
                  </Col>
              </Row>
          </div>
    )
  }
}
export default ProductInfoCard;

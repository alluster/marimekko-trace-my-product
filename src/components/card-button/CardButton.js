import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-flexbox-grid';

class CardButton extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
    }
  }
  
render() { 
    const link = this.props.link ? this.props.link : "/product";

      return (
          <div>
          {
              this.props.link ? 
              <Link to={link}>
              <div className="button-card margin-bottom-50">
                  <Row >
                      <Col center="xs" className="icon-container" xs={3} sm={3} md={3} lg={3}>
                                <span className="card-button-icon">
                                      <i style={{ fontSize: "24px" }}className={this.props.icon}></i>
                                        
                                </span>
                      </Col>
                      <Col className="text-container" xs={7} sm={7} md={7} lg={7} >
                          <h4>{this.props.cardText}</h4>
                      </Col>
                  </Row>
              </div>
          </Link>
          :
          <div className="button-card margin-bottom-50">
              <Row >
                  <Col center="xs" className="icon-container" xs={3} sm={3} md={3} lg={3}>
                            <span className="card-button-icon">
                                  <i style={{ fontSize: "24px" }}className={this.props.icon}></i>
                                    
                            </span>
                  </Col>
                  <Col className="text-container" xs={7} sm={7} md={7} lg={7} >
                      <h4>{this.props.cardText}</h4>
                  </Col>
              </Row>
          </div>
          }
          </div>
      
    )
  }
}
export default CardButton;

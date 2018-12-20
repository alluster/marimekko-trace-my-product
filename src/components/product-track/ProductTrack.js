import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Accordion from '../accordion';

class ProductTrack extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
    }
  }
  
render() { 

      return (
    
        
              <Row >
                  
                  <Col className="text-container" xs={12} sm={12} md={12} lg={12} >
                      <div className="margin-top-5 margin-bottom-5">
                            <Accordion />
                               {/* <h2 className="strong">Product Id: {this.props.data.productId}</h2>
                              <h2 className="strong">Raw Materials: {this.props.data.rawMaterials}</h2>
                              <h2 className="strong">Fabric: {this.props.data.fabric}</h2>
                              <h2 className="strong">Coloring: {this.props.data.coloring}</h2>
                              <h2 className="strong">Manufacturing: {this.props.data.manufacturing}</h2>
                              <h2 className="strong">Monetry distribution:</h2>
                              <h2 className="strong">Transportation:</h2>
                              <h2 className="strong">Product specific information:</h2> */}

                          </div>
                  </Col>
              </Row>

    )
  }
}
export default ProductTrack;

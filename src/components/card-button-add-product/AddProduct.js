import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

 const AddProduct = ({icon, cardText}) => {
        return (
            <div>
                 <div className="button-card margin-bottom-50">
                     <Row >
                         <Col center="xs" className="icon-container" xs={3} sm={3} md={3} lg={3}>
                                 <span className="card-button-icon">
                                         <i style={{ fontSize: "24px" }}className={icon}></i>
                                 </span>
                         </Col>
                         <Col className="text-container" xs={7} sm={7} md={7} lg={7} >
                             <h4>{cardText}</h4>
                         </Col>
                     </Row>
                 </div>
                 </div> 
        )
}
export default AddProduct;

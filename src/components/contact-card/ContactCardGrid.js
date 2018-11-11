import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ContactCard from './ContactCard'

class ContactCardGrid extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
    }
  }
    
  
  render() { 
    const cards = this.props.data.map((card) =>
    <Col xs={12} sm={6} md={4} lg={4}><ContactCard data={card}/></Col>
  );

    return (
      <div>
            <Row className="margin-top-100">
              
            
            {cards}

            </Row>
            </div>
    )
  }
}
export default ContactCardGrid;

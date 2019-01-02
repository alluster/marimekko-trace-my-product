import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Card from './Card'

class CardGrid extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
    }
  }
    
  render() {
    const data =  this.props.data ? this.props.data : {};
    const cards = data.map((card, index) =>
    <Col key={index} xs={12} sm={6} md={4} lg={4}><Card data={card} /></Col>
  );

    return (
      <div>
            <Row>
              
            
            {cards}

            </Row>
            </div>
    )
  }
}
export default CardGrid;

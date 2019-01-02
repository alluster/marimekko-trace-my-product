import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Card from './Card'

class CardGrid extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      data: []
    }

  }
  componentDidMount(){
    this.setState({
      data: this.props.data
    })
  }
  
  render() {
  
  console.log(this.props.data)
    return (
      <div>
            <Row>
              { this.state.data.map((card, index) => 
                <Col key={index} xs={12} sm={6} md={4} lg={4}><Card data={card} /></Col>
              )}
            </Row>
            </div>
    )
  }
}
export default CardGrid;

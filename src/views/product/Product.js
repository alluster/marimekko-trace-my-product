import React, { Component } from 'react';
import BottomNavigation from '../../components/navigation/BottomNavigation'
import TopNavigation from '../../components/navigation/TopNavigation'
import CardButton from '../../components/card-button/CardButton';
import ProductInfoCard from '../../components/product-info-card/ProductInfoCard';
import { connect } from 'react-redux';

import { fetchProduct } from '../../actions/index';



class Product extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      showDetails: false
    }
    this.onClick = this.onClick.bind(this)

  }
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.slug);
  }

  onClick() {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  }

  
  render() {
    const buttonText =  !this.state.showDetails ? "View product history" : "Close "
    return (
      <div>
          <TopNavigation />
          <BottomNavigation />
          <div >
          <img className="image-container" src={this.props.product.image} alt="product"/>

          </div>
          <div className="container product-container">
          
            <ProductInfoCard onClick={this.onClick} buttonText={buttonText} showDetails={this.state.showDetails} data={this.props.product}/>
            <CardButton  icon="fa fa-plus" cardText="Add to my products"/>
          </div>

      </div>
    )
  }
}
function mapStateToProps(state) {
  return { product: state.product };
}
export default connect(mapStateToProps,{ fetchProduct })(Product);

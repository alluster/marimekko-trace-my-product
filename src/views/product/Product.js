import React, { Component } from 'react';
import BottomNavigation from '../../components/navigation/BottomNavigation'
import TopNavigation from '../../components/navigation/TopNavigation'
import CardButton from '../../components/card-button/CardButton';
import AddProduct from '../../components/card-button-add-product/AddProduct';


import ProductInfoCard from '../../components/product-info-card/ProductInfoCard';
import { connect } from 'react-redux';

import { fetchProduct } from '../../actions/index';
import { myProducts } from '../../firebase/database';



class Product extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      showDetails: false,
      added: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.addToMyProducts = this.addToMyProducts.bind(this)

  }
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  handleClick() {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  }
  addToMyProducts() {
    myProducts(this.props.match.params.productId)
    // this.setState(prevState => ({
    //   added: !prevState.added
    // }))
  }
  // removeFromMyProducts() {
  //   removeFromMyProducts(this.props.match.params.productId)
  // }
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
         
            <ProductInfoCard onClick={this.handleClick} buttonText={buttonText} showDetails={this.state.showDetails} data={this.props.product}/>
          </div>
          <AddProduct 
          // onClick={this.addToMyProducts} 
          icon="fa fa-plus" cardText={this.state.added ? "Add to my products" : "Added to your products"}/>


      </div>
    )
  }
}
function mapStateToProps(state) {
  return { product: state.product };
}
export default connect(mapStateToProps,{ fetchProduct })(Product);

import React, { Component } from 'react';
import BottomNavigation from '../../components/navigation/BottomNavigation'
import TopNavigation from '../../components/navigation/TopNavigation'
import CardGrid from '../../components/card-grid/CardGrid';
import CardButton from '../../components/card-button/CardButton';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/index';
import { getUserId } from '../../firebase/auth';


class Products extends Component {
 
  componentDidMount() {
    this.props.fetchProducts();
    getUserId()
  }

  render() {
    const getUser =  getUserId()    
    const userEmail = getUser;

    const icon = "fa fa-camera"
    return (
      <div>
          <TopNavigation />
          <BottomNavigation />
          <div className="container">
          
              <p style={{ textAlign: "center" }} >Welcome</p><h4 style={{ textAlign: "center", margin:"10px" }}>{userEmail}</h4>
              <p style={{ textAlign: "center", margin:"10px" }}>These are your products:</p>

             <CardGrid  data={this.props.products} />
             <CardButton icon={icon} cardText="Add a new product"/>

          </div>

      </div>
    )
  }
}
function mapStateToProps(state) {
  return { products: state.products.all };
}
export default connect(mapStateToProps, { fetchProducts })(Products);

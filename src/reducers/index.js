import { combineReducers } from 'redux';
import ProductsReducer from './products_reducer';
import ProductReducer from './product_reducer';

const rootReducer = combineReducers({
  products: ProductsReducer,
  product: ProductReducer
});
export default rootReducer;

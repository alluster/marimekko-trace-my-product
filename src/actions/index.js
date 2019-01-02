// import myProducts from '../firebase'
import * as contentful from 'contentful'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';

const client = contentful.createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_API_KEY
})

// export function myProductsList() {
//   const myProduct = "moi"
//   myProducts.push().set(myProduct);
// }

export function fetchProducts() {
  const request = client.getEntries(
    {
        'content_type': 'product', 
      }
  )
  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}


export function fetchProduct(productId) {
  const product = client.getEntries(
    {
      'content_type' : 'product',
      'fields.productId': productId,
    }
  )
  return {
    type: FETCH_PRODUCT,
    payload: product
  }

}

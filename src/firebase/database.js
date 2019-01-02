import { database } from './firebase'

export const myProducts = (productId) =>
  database.ref('productList/').push({
    productId
}).then((data)=>{
    //success callback
    console.log('data ' , data)
}).catch((error)=>{
    //error callback
    console.log('error ' , error)
});

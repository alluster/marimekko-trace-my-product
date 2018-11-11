import { FETCH_PRODUCT } from '../actions/index';
const INITIAL_STATE = { 
  slug: "",
  name: "",
  bought: "",
  boughtFrom: "",
  productId: "",
  rawMaterials: "",
  image: "",
  fabric: "",
  coloring: "",

 };
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_PRODUCT:
    return { ...state, 
      slug: action.payload.items[0].fields.slug,
      name: action.payload.items[0].fields.name,
      bought: action.payload.items[0].fields.bought,
      boughtFrom: action.payload.items[0].fields.boughtFrom,
      productId: action.payload.items[0].fields.productId,
      rawMaterials: action.payload.items[0].fields.rawMaterials,
      fabric: action.payload.items[0].fields.fabric,
      coloring: action.payload.items[0].fields.coloring,
      image: action.payload.items[0].fields.image.fields.file.url,

    
    };
  default:
    return state;
  }
}

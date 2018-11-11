import { FETCH_PRODUCTS } from '../actions/index';
const INITIAL_STATE = { all: [] };
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_PRODUCTS:
    return { ...state, all: action.payload.items };
  default:
    return state;
  }
}

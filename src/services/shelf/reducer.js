
// import { FETCH_PRODUCTS } from './actionTypes';
import { FETCH_PRODUCTS } from './actionTypes';

const initialState = {
  products: []
};

const shelfReducer = (state = initialState, action) => {
  const {products} = action
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [
        ...state,
        products
      ];
    default:
      return state
  }
}
export default shelfReducer
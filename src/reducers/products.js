import {
  PRODUCTS_SUCCESS,
  SET_CURRENT_PRODUCT,
} from '../actions/types';


const initialState = {
  auth: {},
  list: [],
  current: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_SUCCESS:
      return {...state, ...action.data};
    case SET_CURRENT_PRODUCT:
      return {...state, current: action.data.current};
    default:
      return {...state};
  }
};

import {SET_HASH} from '../actions/hash';

const initialState = {
  hash:''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HASH:
      return {state, ...action};
    default:
      return {state};
  }
};

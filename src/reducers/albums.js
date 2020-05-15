import {
  ALBUMS_SUCCESS,
  ALBUMS_ERROR
} from '../actions/albums'

const initialState = {
  albums:''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALBUMS_SUCCESS:
      return {...state, ...action.data.albums};
    case ALBUMS_ERROR:
      return {...state, ...action.data};
    default:
      return {...state};
  }
};

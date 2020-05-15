import {
  TRACKS_SUCCESS,
  TRACKS_ERROR
} from '../actions/tracks'

const initialState = {
  tracks:''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TRACKS_SUCCESS:
      return {state, ...action.data};
    case TRACKS_ERROR:
      return {...state, ...action.data.items};
    default:
      return {...state};
  }
};
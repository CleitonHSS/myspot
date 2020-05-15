import {combineReducers} from 'redux';
import albums from './albums';
import tracks from './tracks';

const Reducers = combineReducers({
  albums,
  tracks
});

export default Reducers;

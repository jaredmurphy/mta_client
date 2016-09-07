import { combineReducers } from 'redux';
import BgReducer from './reducer_bg_image';
import TrainsReducer from './reducer_trains';

const rootReducer = combineReducers({
  bgImage: BgReducer,
  trains: TrainsReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import BgReducer from './reducer_bg_image';


const rootReducer = combineReducers({
  bgImage: BgReducer
});

export default rootReducer;

import { FETCH_TRAINS } from '../actions/index';
import { linesToJson } from '../helpers';
const INITIAL_STATE = { all: [], train: null };

export default function(state = INITIAL_STATE, action) {
  if (action.payload) {
    var trainData = linesToJson(action.payload.data);
  }
   switch(action.type) {
     case 'FETCH_TRAINS':
       return { ...state, all: trainData };
     default:
       return state;
   }
}

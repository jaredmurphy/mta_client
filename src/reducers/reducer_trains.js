import { FETCH_TRAINS } from '../actions/index';
import { linesToJson } from '../helpers';

const INITIAL_STATE = { all: [], currentTrain: null };

export default function(state = INITIAL_STATE, action) {
  if (action.payload) {
  }
   switch(action.type) {
     case 'FETCH_TRAINS':
       var trainData = linesToJson(action.payload.data);
       return { ...state, all: trainData };
     case 'FETCH_SINGLE_TRAIN':
        return {...state, currentTrain: action.payload.data}
     default:
       return state;
   }
}

import { FETCH_TRAINS } from '../actions/index';
const INITIAL_STATE = { all: [], train: null };

export default function(state = INITIAL_STATE, action) {
  if (action.payload) {console.log('trains', action.payload.data)}
   switch(action.type) {
     case 'FETCH_TRAINS':
       return { ...state, all: action.payload.data  };
     default:
       return state;
   }
}

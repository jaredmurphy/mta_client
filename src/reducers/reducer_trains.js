import { FETCH_TRAINS } from '../actions/index';
const INITIAL_STATE = { all: [], post: null };

export default function(state = null, action) {
   switch(action.type) {
     case FETCH_TRAINS:
       debugger;
       return { ...state, trains: action.payload.data  };
     default:
       return state;
   }
}

import { FETCH_BG } from '../actions/index';
const INITIAL_STATE = { all: [], post: null };

export default function(state = null, action) {
   switch(action.type) {
     case FETCH_BG:
       debugger;
       return { ...state, bgImage: action.payload.data  };
     default:
       return state;
   }
}

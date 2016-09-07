import { FETCH_BG } from '../actions/index';

export default function(state = null, action) {
   switch(action.type) {
     case FETCH_BG:
       return { ...state, bgImage: action.payload.data  };
     default:
       return state;
   }
}

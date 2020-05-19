import { FETCH_FRONT_PAGE } from '../types';

const initialState = {
  frontpage: []
};

export default function (state = initialState, action) {
  switch (action.type) {  
    case FETCH_FRONT_PAGE:
      return {
        ...state,
        frontpage : action.payload,
      };

    default:
      return state;
  }
}

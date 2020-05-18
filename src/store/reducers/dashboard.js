import { DASHBOARD } from '../types';

const initialState = {};

export default function (state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case DASHBOARD:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

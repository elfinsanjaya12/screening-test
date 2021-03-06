import { FETCH_DASHBOARD } from '../types';

const initialState = {
  dashboard: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DASHBOARD:
      return {
        ...state,
        dashboard : action.payload,
      };

    default:
      return state;
  }
}

import axios from '../../config';
import { FETCH_DASHBOARD } from '../types';

export const fetchDashboard = (url) => (dispatch) => axios.get(url).then((response) => {
  dispatch({
    type: FETCH_DASHBOARD,
    payload: response.data.data,
  });
});

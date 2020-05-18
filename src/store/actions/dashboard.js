import axios from '../../config';
import { FETCH_DASHBOARD } from '../types';

export const fetchPage = (url, page) => (dispatch) => axios.get(url).then((response) => {
  console.log(response.data);
  dispatch({
    type: FETCH_DASHBOARD,
    payload: {
      [page]: response.data,
    },
  });
});

import axios from '../../config';
import { FETCH_FRONT_PAGE } from '../types';

export const fetchPage = (url) => (dispatch) => axios.get(url).then((response) => {
  dispatch({
    type: FETCH_FRONT_PAGE,
    payload: response.data.data,
  });
});

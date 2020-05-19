import { combineReducers } from 'redux';
import dashboard from './dashboard';
import frontpage from './frontpage'

export default combineReducers({
  dashboard,
  frontpage
});

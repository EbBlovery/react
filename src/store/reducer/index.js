import {combineReducers} from 'redux';

import control from './module/control';
import newsList from './module/newsList';

export default combineReducers({
	control,
	newsList
})
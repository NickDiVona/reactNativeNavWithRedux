//SYSTEM IMPORTS
import { combineReducers } from 'redux';
//USER IMPORTS
import counterNumberReducer from './counterNumberReducer';

const rootReducer = combineReducers({
  counterNumber: counterNumberReducer
});

export default rootReducer;

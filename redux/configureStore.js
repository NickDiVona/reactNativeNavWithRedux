//SYSTEM IMPORTS
import { createStore } from 'redux';
//USER IMPORTS
import rootReducer from './reducers/rootReducer';

const appDataStore = createStore(rootReducer);

export default appDataStore;

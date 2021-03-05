import {combineReducers,createStore, applyMiddleware} from 'redux';
import AuthReducer from './Reducers/AuthReducer';

const AppReducers = combineReducers({
    auth: AuthReducer,
});

const rootReducer = (state , action) => {
    return AppReducers(state , action); 
}

let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);

export default store;
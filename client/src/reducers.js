import { combineReducers } from 'redux';
import  reducer  from './duck/reducers'

const rootReducer = combineReducers({
    image: reducer
});

export default rootReducer;
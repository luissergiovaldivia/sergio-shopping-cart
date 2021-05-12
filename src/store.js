
import { compose } from 'redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {productsReducer} from './reducer/productsReducer' 


const initialState = {};
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(

    combineReducers({
    products: productsReducer,
    

}),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
 
)

export default store;
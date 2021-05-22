//import { compose } from "redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducer/productsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import { cartReducer } from "./reducer/cartReducers";


const initialState = {};
//const composeEnhancer = (window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose);


const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
  }),
  initialState,
 // composeEnhancer(applyMiddleware(thunk))
 composeWithDevTools(applyMiddleware(thunk))
);

export default store;

//import { compose } from "redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducer/productsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import { cartReducer } from "./reducer/cartReducers";
import { orderReducer } from "./reducer/orderReducers";


const initialState = {};
//const composeEnhancer = (window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose);


const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
  }),
  initialState,
 // composeEnhancer(applyMiddleware(thunk))
 composeWithDevTools(applyMiddleware(thunk))
);

export default store;

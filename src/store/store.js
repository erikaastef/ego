import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from "react-router-redux";
import reducer from "./reducers";
const history = createHistory()
const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk, middleware))
);
import { applyMiddleware, legacy_createStore as createStore, compose } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const customstore = createStore(
    rootReducer, composeEnhancers(applyMiddleware(thunk))
);

customstore.subscribe(() => {
    // console.log("store subscribe --> " + JSON.stringify(store.getState()));
});

export default customstore;

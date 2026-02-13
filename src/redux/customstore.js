import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const customstore = createStore(
    rootReducer, composeEnhancers(applyMiddleware(thunk))
);

customstore.subscribe(() => {
    // console.log("store subscribe --> " + JSON.stringify(store.getState()));
});

export default customstore;

import {applyMiddleware,createStore} from "redux";
import {createLogger} from "redux-logger";
const logger = createLogger();
import rootReducer from "./reducers/rootReducer/rootReducer";
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
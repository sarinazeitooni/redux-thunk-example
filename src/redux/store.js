import {applyMiddleware,createStore} from "redux";
import {createLogger} from "redux-logger";
import rootReducer from "./reducers/rootReducer/rootReducer";

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
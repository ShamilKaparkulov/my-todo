import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import uiReduser from "./uiReduser";

const store = createStore(uiReduser,applyMiddleware(thunk))

export default store 
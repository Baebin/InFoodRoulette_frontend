import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit"

// Modules
import Food from "./modules/food";

// export const history = createBrowserHistory();

const reducers = combineReducers(
    {
        food: Food
    }
)

let store = configureStore(
    {
        reducer: reducers
    }
);

export default store;
import {combineReducers, configureStore, createStore, legacy_createStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import {catalogReducer,} from "./catalog-reducer";


export const store= configureStore({
    reducer:{
        user: userReducer,
    }
})

// export const store = legacy_createStore(rootReducer)
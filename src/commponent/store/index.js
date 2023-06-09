import {combineReducers, legacy_createStore} from "redux";

import {catalogReducer} from "../../store/catalog-reducer";
// import {legacy_createStore} from "@reduxjs/toolkit";

export const rootReducer = combineReducers({

        catalog: catalogReducer

})
export const store = legacy_createStore(rootReducer)
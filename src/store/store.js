import { createStore, combineReducers } from 'redux';

import extensionStorageReducer from "./reducers/extensionStorageReducer";

const store = createStore(combineReducers({
                        state: extensionStorageReducer
                    }));

export default store;



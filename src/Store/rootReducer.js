import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"

import storage from "redux-persist/lib/storage" // defaults to localStorage for web and AsyncStorage for react-native


//import reducers from domains
import shared from "./Shared/reducers"
import users from "./Users/reducers"
const persistConfig = {
	key: "root",
	blacklist: ["users","savings"],
	storage
}

const persistedReducer = persistReducer(
	persistConfig,
	combineReducers({
		users: persistReducer(persistConfig, users)
	})
)
export default persistedReducer

import { combineReducers } from "redux"

import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import {
	seamlessImmutableReconciler,
	seamlessImmutableTransformer
} from "redux-persist-seamless-immutable"

//import reducers from domains
import shared from "./Shared/reducers"
import users from "./Users/reducers"

const usersPersistConfig = {
	key: "users",
	storage,
	blacklist: [
		"_loginProcess",
		"_signupProcess",
		"_getUserInformationProcess",
		"_getUserDepositsProcess"
	],
	stateReconciler: seamlessImmutableReconciler,
	transforms: [seamlessImmutableTransformer]
}

const rootReducer = combineReducers({
	shared: shared,
	users:  persistReducer(usersPersistConfig, users)
})

export default rootReducer

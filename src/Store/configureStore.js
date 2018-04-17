import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web and AsyncStorage for react-native

import {
	seamlessImmutableReconciler,
	seamlessImmutableTransformer
} from "redux-persist-seamless-immutable"

import rootReducer from "./rootReducer"

const persistConfig = {
	key: "root",
	blacklist: ["users"],
	storage,
	stateReconciler: seamlessImmutableReconciler,
	transforms: [seamlessImmutableTransformer]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))


<<<<<<< HEAD
export const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(thunk))
)
export const persistor = persistStore(store)

=======
export const persistor = persistStore(store)

export default store
>>>>>>> master

import { createStore, applyMiddleware, compose } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "localforage" // defaults to localStorage for web and AsyncStorage for react-native
import thunk from "redux-thunk"
import rootReducer from "./rootReducer"

const persistConfig = {
	key: "root",
	storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(thunk))
)
export const persistor = persistStore(store)


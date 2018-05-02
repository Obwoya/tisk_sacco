import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import createHistory from "history/createBrowserHistory"
import { routerMiddleware } from "react-router-redux"

import { logger } from "redux-logger"
import { persistStore } from "redux-persist"

import rootReducer from "./rootReducer"

//setup react router redux config
export const history = createHistory()
const reduxRouterMiddleware = routerMiddleware(history)

const store = createStore(
	rootReducer,
	applyMiddleware(thunk, logger, reduxRouterMiddleware)
)

export const persistor = persistStore(store)
export default store

import { combineReducers } from "redux"

//import reducers from domains
import shared from "./Shared/reducers"
import users from "./Users/reducers"
const rootReducer = combineReducers({
	shared: shared,
	users: users
})

export default rootReducer

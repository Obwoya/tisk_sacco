/* global  it, describe */
import React from "react"
import ReactDOM from "react-dom"
import App from "../Containers/App"

import { Provider } from "react-redux"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("index", () => {
	it("renders without crashing", () => {
		const store = mockStore({
			users: {
				users: {
					auth: {
						_isUserAuthenticated: false
					}
				}
			}
		})
		const div = document.createElement("div")
		ReactDOM.render(
			<Provider store={store}>
				<App />
			</Provider>,
			div
		)
	})
})

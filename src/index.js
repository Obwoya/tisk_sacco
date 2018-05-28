import { render } from "react-dom"
import React from "react"

import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import store, { persistor, history } from "./Store/configureStore"

import "./app.css"
import "./bootstrap.css"
import App from "./Containers/App"
render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App history={history} />
		</PersistGate>
	</Provider>,
	document.getElementById("app")
)

require("./serviceWorker")
if ("serviceWorker" in navigator) {
	window.addEventListener("load", function() {
		navigator.serviceWorker.getRegistrations().then(function (registrations) {
			for (let registration of registrations) {
				registration.unregister()
			}
		})
		// navigator.serviceWorker
		// 	.register("./serviceWorker.js", { scope: "/" })
		// 	.then(registration => {
		// 		// registration.unregister() 
		// 		// registration.update()
		// 		// registration.pushManager.subscribe({ userVisibleOnly: true })
		// 	})
		// 	.catch(error => {
		// 		throw error
		// 	})
	})
}

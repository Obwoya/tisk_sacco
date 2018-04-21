import { render } from "react-dom"
import React from "react"

import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import store, { persistor } from "./Store/configureStore"

import "./app.css"
import App from "./Containers/App"
render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById("app")
)



require("./serviceWorker")
if ("serviceWorker" in navigator) {
	window.addEventListener("load", function() {
		navigator.serviceWorker
			.register("./serviceWorker.js", { scope: "/" })
			.then(() => {
				// registration.pushManager.subscribe({ userVisibleOnly: true })
			})
			.catch(error => {
				throw error
			})
	})
}

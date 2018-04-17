importScripts("/build/precache-manifest.161d71555b78283c739c197b2d3946bf.js", "https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

/* global  importScripts, workbox*/

if ("function" === typeof importScripts) {
	importScripts(
		"https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js"
	)

	if (workbox) {
		workbox.routing.registerRoute(
			new RegExp(".vendor.js"),
			workbox.strategies.cacheFirst({ cacheName: "vendor-cache" })
		)
		workbox.routing.registerRoute(
			new RegExp(".*.js"),
			workbox.strategies.staleWhileRevalidate()
		)

		workbox.routing.registerRoute(
			new RegExp(".*.json"),
			workbox.strategies.cacheFirst({
				cacheName: "json-cache"
			})
		)

		// workbox.routing.registerRoute(
		// 	// Cache CSS files
		// 	//,
		// 	new RegExp("/"),
		// 	// Use cache but update in the background ASAP
		// 	workbox.strategies.staleWhileRevalidate({
		// 		// Use a custom cache name
		// 		cacheName: "html-cache"
		// 	})
		// )

		workbox.routing.registerRoute(
			// Cache CSS files
			/.*\.css/,
			// Use cache but update in the background ASAP
			workbox.strategies.staleWhileRevalidate({
				// Use a custom cache name
				cacheName: "css-cache"
			})
		)

		workbox.routing.registerRoute(
			// Cache image files
			/.*\.(?:png|jpg|jpeg|svg|gif)/,
			// Use the cache if it's available
			workbox.strategies.cacheFirst({
				// Use a custom cache name
				cacheName: "image-cache",
				plugins: [
					new workbox.expiration.Plugin({
						// Cache only 20 images
						maxEntries: 20,
						// Cache for a maximum of a week
						maxAgeSeconds: 3 * 7 * 24 * 60 * 60
					})
				]
			})
		)

		workbox.routing.registerRoute(
			// Cache image files
			/.*\.(?:ttf|woff|woff2)/,
			// Use the cache if it's available
			workbox.strategies.cacheFirst({
				// Use a custom cache name
				cacheName: "font-cache",
				plugins: [
					new workbox.expiration.Plugin({
						// Cache only 20 images
						maxEntries: 20,
						// Cache for a maximum of a week
						maxAgeSeconds: 3 * 7 * 24 * 60 * 60
					})
				]
			})
		)
			// workbox.routing.registerRoute(
			// 	// Cache CSS files
			// 	//,
			// 	new RegExp("/*"),
			// 	// Use cache but update in the background ASAP
			// 	workbox.strategies.staleWhileRevalidate({
			// 		// Use a custom cache name
			// 		cacheName: "others-cache"
			// 	})
			// )
	}
}


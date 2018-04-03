importScripts(
	"https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js"
)

if (workbox) {
	workbox.routing.registerRoute(
		new RegExp(".*vendor.js"),
		workbox.strategies.cacheFirst()
	)

	workbox.routing.registerRoute(
		// Cache CSS files
		/.*\.css/,
		// Use cache but update in the background ASAP
		workbox.strategies.staleWhileRevalidate({
			// Use a custom cache name
			cacheName: "css-cache"
		})
	)
} else {
	console.log("Boo! Workbox didn't load 😬")
}

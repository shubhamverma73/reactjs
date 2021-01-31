// we'll version our cache (and learn how to delete caches in
// some other post)
let cacheData = "appV1";
this.addEventListener("install", (event) => {
	// once the SW is installed, go ahead and fetch the resources
  	// to make this work offline
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/css2?family=Redressed&display=swap',
				'/releases/v5.10.0/css/all.css',
				'/static/js/bundle.js',
				'/static/js/0.chunk.js',
				'/static/js/main.chunk.js',
				'/manifest.json',
				'/index.html',
				'/members',
				'/',
				/*
				DEAR READER,
				ADD A LIST OF YOUR ASSETS THAT
				YOU WANT TO WORK WHEN OFFLINE
				TO THIS ARRAY OF URLS
				*/
            ])
        })
    )
})

// when the browser fetches a url, either response with
// the cached object or go ahead and fetch the actual url
this.addEventListener("fetch", (event) => {
	/*if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
		event.waitUntil(
			this.registration.showNotification("Internet", {
				body: "internet working",
				icon: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"
			})
		)
	}*/
    if (!navigator.onLine) {
        if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
            event.waitUntil(
                this.registration.showNotification("Internet", {
                    body: "internet not working",
					icon: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"
                })
            )
        }
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
                let requestUrl = event.request.clone();
                fetch(requestUrl)
            })
        )
    }
}) 
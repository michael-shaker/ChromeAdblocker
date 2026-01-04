const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
	"*://*.adnxs.com/*",
	"*://*.adsrvr.org/*",
	"*://*.adservice.google.com/*",
	"*://*.googletagservices.com/*",
	"*://*.serving-sys.com/*",
	"*://*.adform.net/*",
	"*://*.adsafeprotected.com/*",
	"*://*.pubmatic.com/*",
	"*://*.rubiconproject.com/*",
	"*://*.taboola.com/*",
	"*://*.outbrain.com/*",
	"*://*.adroll.com/*",
	"*://*.ads-twitter.com/*",
	"*://*.doubleverify.com/*",
	"*://*.criteo.com/*",
	"*://*.advertising.com/*",
	"*://*.adserver.com/*",
	"*://*.media.net/*",
	"*://*.yieldmanager.com/*",
	"*://*.pubmatic.com/*"
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)


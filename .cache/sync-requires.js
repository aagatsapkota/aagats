const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/aagatsapkota/Aagat/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/aagatsapkota/Aagat/src/pages/index.js"))),
  "component---src-pages-json-at-buildtime-js": hot(preferDefault(require("/Users/aagatsapkota/Aagat/src/pages/json-at-buildtime.js")))
}


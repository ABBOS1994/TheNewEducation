import React from "react"
import "../src/assets/styles/globals.css"
import "aos/dist/aos.css"

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  )
}

export default MyApp

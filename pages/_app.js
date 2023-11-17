import React from 'react';
import '../src/assets/styles/globals.css';
import 'aos/dist/aos.css';
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

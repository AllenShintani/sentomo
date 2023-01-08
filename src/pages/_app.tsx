// import '../styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import { initializeFirebaseApp } from 'src/lib/firebase/firebase'
import { getApp } from 'firebase/app'
initializeFirebaseApp()
function MyApp({ Component, pageProps }: AppProps) {
  console.log(getApp())
  return <Component {...pageProps} />
}

export default MyApp

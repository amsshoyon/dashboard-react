import React, { Suspense } from 'react'

import { Provider } from 'react-redux'
import { store } from './store/store'

import './localization/i18n'
import { App } from './App'
import { HashRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
// import SplashScreenGateway from '@/components/SplashScreenGateway'
import { ThemeProvider } from '@/components/ThemeProvider.component'
import { RouteByEventChanger } from '@/components/RouteByEventChanger.component'

const GlobalFallback = () => {
  return <></>
}
const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <Suspense fallback={<GlobalFallback />}>
    <HashRouter>
      <RouteByEventChanger />
      <Provider store={store}>
        <ThemeProvider>
          {/* <SplashScreenGateway> */}
            <App />
          {/* </SplashScreenGateway> */}
        </ThemeProvider>
      </Provider>
    </HashRouter>
  </Suspense>,
)

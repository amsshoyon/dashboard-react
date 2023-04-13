/* eslint-disable import/export */
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { ThemeProvider } from '@/components/ThemeProvider.component'

const AllTheProviders = ({ children }: any) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  )
}

const customRender = (ui: any, options?: any) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

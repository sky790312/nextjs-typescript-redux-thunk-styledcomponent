import { Provider } from 'react-redux'
import { useStore } from '@/store/index'
import { GlobalStyles } from '@/GlobalStyles'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  )
}

import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../src/redux/store'
import { appWithTranslation } from '../i18n'

type AppProps = {
  store: any
}

class _App extends App<AppProps> {
  static async getInitialProps({ Component, ctx }) {

    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    }
  }

  render(): JSX.Element {
    const { Component, pageProps, store } = this.props

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore)(appWithTranslation(_App))
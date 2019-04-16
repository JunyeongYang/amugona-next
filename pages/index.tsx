import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateMessage } from '../src/redux/showcase/actions'
import { i18n, withNamespaces } from '../i18n'

import "./index.scss"

interface IndexProps {
  message: string
  updateMessage: any
  t: Function
}

interface IndexState {

}

class IndexPage extends React.Component<IndexProps, IndexState> {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common']
    }
  }

  render(): JSX.Element {
    const { t, message, updateMessage } = this.props
    return (
      <div className="root">
        <h1>{t('title')}</h1>
        <p>Message : <span>{message}</span></p>
        <button onClick={() => updateMessage('update message')}>click</button>
        <button onClick={() => i18n.changeLanguage('en')}>🇺🇸</button>
        <button onClick={() => i18n.changeLanguage('ko')}>🇰🇷</button>🇺
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  message: state.showcaseReducer.message,
})

const mapDispatchToProps = (dispatch) => ({
  updateMessage: bindActionCreators(updateMessage, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(withNamespaces('common')(IndexPage))
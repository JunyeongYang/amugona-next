import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateMessage } from '../src/redux/showcase/actions'

import "./index.scss"

interface IndexProps {
  title: string
  message: string
  updateMessage: any
}

interface IndexState {

}

class IndexPage extends React.Component<IndexProps, IndexState> {
  static async getInitialProps({store, isServer, pathname, query}) {
    return {
      title: 'NextJS + Typescript + Sass + Redux + I18N + MaterialUI'
    }
  }

  render(): JSX.Element {
    const { title, message, updateMessage } = this.props
    return (
      <div className="root">
        <h1>{title}</h1>
        <p>Message : <span>{message}</span></p>
        <button onClick={() => updateMessage('update message')}>click</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
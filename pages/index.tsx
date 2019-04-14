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
  static async getInitialProps({store}) {
    console.log('store : ', store.getState().showcaseReducer.message)
    return {
      title: 'NextJS + Typescript + Sass + Redux + I18N + MaterialUI',
      message: store.getState().showcaseReducer.message
    }
  }

  render(): JSX.Element {
    const { title, message, updateMessage } = this.props
    console.log('updateMessage : ', updateMessage)
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
  updateMessage: state.message,
})

const mapDispatchToProps = (dispatch) => ({
  updateMessage: bindActionCreators(updateMessage, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
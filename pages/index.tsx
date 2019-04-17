import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateMessage } from '../src/redux/showcase/actions'
import { i18n, withNamespaces } from '../i18n'
import Layout from '../src/components/Layout'
import styled from 'styled-components'
import fetch from 'isomorphic-fetch'
import axios from 'axios'

import "./index.scss"

interface IndexProps {
  message: string
  updateMessage: any
  t: Function
  productParams: object
  symbolsByTabs: any
}

interface IndexState {

}

const BackgroundImage = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 0;
  position: relative;
  z-index: 0;

  &:after {
    content: "";
    background: url(/static/images/background-image.jpg);
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`

const BackgroundTitle = styled.h1`
  font-size: 40px;
  line-height: 1.2;
  text-align: center;
  padding-bottom: 20px;
  margin: 0;
  font-weight: 400;
  color: hotpink;

  @media (max-width: 600px) {
    font-size: 36px;
  }
`

// CARD LIST
const CardContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`

const CardHeader = styled.div`
  height: 55px;
  background-color: hotpink;
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
  padding: 5px;
`

const CardHeaderButton = styled.button`
  background-color: #123456;
  color: white;
  width: 120px;
  border: 1px solid hotpink;
  border-radius: 7px;
  padding: 5px;

  &:hover {
    cursor: pointer;
    background-color: #012345;
  }

  &:focus {
    outline: none;
  }

  span {
    margin: 5px;
    color: #12aa12;
    font-weight: 600;
  }
`

const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #123456;
`

const Card = styled.div`
  display: flex;
  background-color: white;
  border-radius: 5px;
  width: 280px;
  height: 280px;
  margin: 1em;
  color: black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 20px 0 rgba(0,0,0,.1);
  cursor: pointer;
`

const CardInnerHeader = styled.div`
  height: 60%;
  width: 100%;
  background-color: red;
  border-radius: 5px 5px 0 0;
  background: url(${props => props.imageSrc || '/static/images/bg/default-bg.jpg'});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  img {
    width: 50px;
  }

  p {
    font-weight: 800;
    margin-bottom: 3px;
    text-align: center;
  }
  
  span {
    color: #bbb;
  }
`

const CardInnerContent = styled.div`
  height: 40%;
  width: 100%;
  background-color: #white;
  border-radius: 0 0 5px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 800;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

class IndexPage extends React.Component<IndexProps, IndexState> {

  constructor(props) {
    super(props)
  }

  static async getInitialProps() {
    console.log('init prop')
    const result: any = await axios.get('https://blackmoonplatform.com/_jsdata/showcase').then(res => res.data)
    return {
      namespacesRequired: ['common'],
      productParams: result.productParams,
      symbolsByTabs: result.symbolsByTabs
    }
  }

  private _getRiskDoge = (risk) => {
    const dogs = '';
    for (let i = 0; i < risk; i++) {
    }
  }

  public _getShowcase = async () => {
    const result = await fetch('https://blackmoonplatform.com/_jsdata/showcase')
    console.log(result)
  }

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    console.log('did mount')
  }

  componentDidUpdate() {
    console.log('did update')
  }

  render(): JSX.Element {
    const { t, message, updateMessage, productParams } = this.props
    const filteredProducts = Object.values(productParams).filter(product => product.name)
    console.log('render')
    return (
      <Layout>
        <BackgroundImage>
          <BackgroundTitle>
            {t('title')}<br/>
            {t('subtitle')}
          </BackgroundTitle>
        </BackgroundImage>

        {/* CARD LIST */}
        <div>

        </div>
        <CardContainer>
          <CardHeader>
            <CardHeaderButton>ALL<span>{filteredProducts.length}</span></CardHeaderButton>
            <CardHeaderButton>CRYPTO<span>9</span></CardHeaderButton>
            <CardHeaderButton>STOCKS<span>7</span></CardHeaderButton>
            <CardHeaderButton>HEDGE FUNDS<span>1</span></CardHeaderButton>
          </CardHeader>
          <CardContent>
            {
              filteredProducts.map(product => {
                const symbol = product.tokenSymbol
                const imageSrc = `/static/images/bg/${symbol}.jpg`
                const logoSrc = `/static/images/doge-icon.png`
                return (
                  <Card key={symbol}>
                    <CardInnerHeader imageSrc={imageSrc}>
                      <img src={logoSrc} alt={symbol}/>
                      <p>{product.name}</p>
                      <span>{product.assets}</span>
                    </CardInnerHeader>
                    <CardInnerContent>
                      <div>
                        Return &amp; Risk {this._getRiskDoge(product.returnRisk)}
                      </div>
                      <div>
                        <p>{product.currency.toUpperCase()} <span>{product.returnValue}</span></p>
                      </div>
                      <div>
                        <button onClick={this._getShowcase}>BUY</button>
                        <button>SELL</button>
                      </div>
                    </CardInnerContent>
                  </Card>
                )
              })
            }
          </CardContent>
        </CardContainer>


        {/* <div className="root">
          <p>Message : <span>{message}</span></p>
          <button onClick={() => updateMessage('update message')}>click</button>
          <button onClick={() => i18n.changeLanguage('en')}>🇺🇸</button>
          <button onClick={() => i18n.changeLanguage('ko')}>🇰🇷</button>
        </div> */}
      </Layout>
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
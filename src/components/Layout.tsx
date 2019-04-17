import Header from './Header'

const layoutStyle = {
  height: '100vh',
  width: '100%',
  backgroundColor: '#123456'
}

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
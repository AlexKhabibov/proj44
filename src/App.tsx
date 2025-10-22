import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Profile from './components/Profile'
import Search from './components/Search'

function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Profile />
      <Search />
      <Content />
      <Footer />
    </div>
  )
}

export default App
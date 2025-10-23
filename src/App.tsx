import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
// import Profile from './components/Profile'
import Search from './components/Search'

function App() {

  return (
    <div>
      <Header />
      {/* <Profile /> */}
      <Search />
      <Content />
      <Footer />
    </div>
  )
}

export default App
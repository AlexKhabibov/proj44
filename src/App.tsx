import { BrowserRouter } from 'react-router'
import Footer from './components/Footer'
import Header from './components/Header'
import Search from './components/Search'
import UserDashboard from './components/UserDashboard'
import CardList from './components/CardList'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Search />
        <UserDashboard />
        <CardList />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Routes , Route , useLocation  } from 'react-router-dom'
import PropertyList from './pages/PropertyList'
import PropertyPage from './pages/PropertyPage'
import SubNavbar from './components/SubNavbar'
import Footer from './components/Footer'
import SubFooter from './components/SubFooter'
import Login from './components/Login'

function App() {

  const [category, setcategory] = useState();
  const [isScrolled, setisScrolled] = useState();
  const [isExpanded, setisExpanded] = useState();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [showLogin, setshowLogin] = useState(false);

  const message = () => {
    alert("Feature preview only , It is not functional");
  }

  return (
    <div className='overflow-scroll'>
      <Login setshowLogin={setshowLogin} showLogin={showLogin}/>
    {isHomePage ? (<Navbar setshowLogin={setshowLogin} sendCategory={setcategory} sendScrolled={setisScrolled} sendExpand={setisExpanded} message={message}/>)
    : (<SubNavbar message={message}/>)}
      <Routes>
        <Route path='/' element={<PropertyList message={message} category={category} isScrolled={isScrolled} isExpanded={isExpanded}/>}/>
        <Route path='/pages/:id' element={<PropertyPage message={message}/>}/>
      </Routes>
      
    {isHomePage ? (<Footer message={message}/>) : (<SubFooter message={message}/>)}
      
    </div>
  )
}

export default App

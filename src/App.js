import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'

import Navigation from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ActivitiesPage from './pages/ActivitiesPage'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Auth from './pages/Auth'

function App() {
  const { user } = useAuthContext()
  

    //PAGES MUST BE REGISTERED HERE
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div className='pages'>
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/Login" />}/>
            {/* <Route path="/" element={<Home />}/> */}
            <Route path="/About" element={<About />}/>
            <Route path="/Contact" element={<Contact />}/>
            <Route path="/ActivitiesPage" element={<ActivitiesPage />}/>
            <Route path='/Admin' element={<Admin />}/>
            <Route path='/Auth' element={<Auth />}/>
            <Route path="/Login" element={!user ? <Login /> : <Navigate to="/" />}/>
            <Route path="/Signup" element={!user ? <Signup /> : <Navigate to="/" />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

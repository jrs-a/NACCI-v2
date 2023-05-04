import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ActivitiesPage from './pages/ActivitiesPage'
import Admin from './pages/Admin'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div className='pages'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Contact" element={<Contact />}/>
            <Route path="/ActivitiesPage" element={<ActivitiesPage />}/>
            <Route path='/Admin' element={<Admin />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css'
import Layaout from './components/Layaout'
import NavBar from './components/Under-Navbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
      <Layaout/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
        <NavBar tabs={['Apps', 'Components', 'Websites', 'Other stuff']} />
    </BrowserRouter>
      

    </> 
  )
}

export default App

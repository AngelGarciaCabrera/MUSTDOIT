import './App.css'
import Layaout from './components/Layaout'
import NavBar from './components/Under-Navbar'
import Home from './components/Home'



function App() {
  return (
    <>
    
        <div className='layaout'>
            <Layaout/>
          <div className='bobby'>
        
              <div className=''>
                <Home/>
              </div>
          
          </div>
        <div className='under-menu'>
            <NavBar tabs={['Apps', 'Components', 'Websites', 'Other stuff']} />
        </div>  
        
        </div>
   

    </> 
  )
}

export default App

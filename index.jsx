import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'

//server created with mirage js
import "./server"

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/" className='logo'>#VANLIFE</Link>
        <nav>
          <Link to="/about" className='nav-link'>About</Link>
          <Link to="/vans" className='nav-link'>Vans</Link>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/vans' element={<Vans/>}></Route>
        <Route path='/vans/:id' element={<VanDetail/>}></Route>
      </Routes>

      <footer>
        <p>Ⓒ 2022 #VANLIFE</p>
      </footer>
    </BrowserRouter>

  )
}



ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
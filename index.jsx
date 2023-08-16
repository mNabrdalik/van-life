import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import HostVans from './pages/Host/HostVans'
import HostVanDetail from './pages/Host/HostVanDetails'
import Reviews from './pages/Host/Reviews'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'

//server created with mirage js
import "./server"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='vans' element={<Vans/>}/>
          <Route path='vans/:id' element={<VanDetail/>}/>
          
          <Route path='host' element={<HostLayout/>}> 
            {/* index => content showed in /host. Index helps to avoid case lik host/host */}
            <Route index element={<Dashboard/>}/>
            {/* path: /host/income */}
            <Route path='income' element={<Income/>}/> 
            <Route path='vans' element={<HostVans/>}/> 
            <Route path='vans/:id' element={<HostVanDetail/>}/> 
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
     
        </Route>
      </Routes>
    </BrowserRouter>

  )
}



ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
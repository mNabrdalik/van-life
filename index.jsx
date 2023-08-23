import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  Route, 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements, 
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import Page404 from './pages/404'
import VanDetail from './pages/Vans/VanDetail'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import HostVans from './pages/Host/HostVans'
import HostVanDetail from './pages/Host/HostVanDetail'
import HostVanInfo from './pages/Host/HostVanInfo'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import Reviews from './pages/Host/Reviews'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'

//server created with mirage js
import "./server"

const myRouter = createBrowserRouter(createRoutesFromElements(
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
      <Route path='reviews' element={<Reviews/>}/>
      <Route path='vans' element={<HostVans/>}/> 
      <Route path='vans/:id' element={<HostVanDetail/>}> 
        <Route index element={<HostVanInfo/>}/> 
        <Route path='pricing' element={<HostVanPricing/>}/> 
        <Route path='photos' element={<HostVanPhotos/>}/> 
      </Route>
    </Route>

    <Route path='*' element={<Page404/>}/>  {/*  404 page */}
  </Route>
))

function App() {
  return (
    <RouterProvider router={myRouter}/>
  )
}



ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
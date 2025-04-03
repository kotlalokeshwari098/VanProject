import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../src/pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail';
import './server'
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';



function Header() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
          {/* apply this path for every page like in host also here path='' is not defined right*/}
          {/* if we define path='/' then in next line use */}
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VanDetail />} />


           
          <Route path='host' element={<HostLayout />}>

              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='reviews' element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
createRoot(document.getElementById('root')).render(

  <Header />

)

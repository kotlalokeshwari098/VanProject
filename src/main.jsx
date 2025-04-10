import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../src/pages/Home'
import About from './pages/About'
import Vans,{loader as vansLoader }from './pages/Vans'
import VanDetail,{loader as vanDetailLoader} from './pages/VanDetail';
import './server'
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVan,{loader as hostVanLoader} from './pages/Host/HostVan'
import HostVanDetail ,{loader as hostVanDetailLoader}from './pages/Host/HostVanDetail';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import NotFound from './pages/NotFound';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Error from './components/Error';
import Login from './components/Login';


const router = createBrowserRouter(createRoutesFromElements(
  <Route 
   path='/'
   element={<Layout />}
   errorElement={<Error />}
  >
    {/* apply this path for every page like in host also here path='' is not defined right*/}
    {/* if we define path='/' then in next line use */}
    <Route index element={<Home />}  />
    <Route path='about' element={<About />} />

    <Route 
    path='vans' 
    element={<Vans />} 
    loader={vansLoader} />

    <Route 
     path='vans/:id'
     element={<VanDetail/>} 
     loader={vanDetailLoader}

     />

   <Route 
   path='login'
   element={<Login /> }
   />


    <Route path='host' element={<HostLayout />}>

      <Route index 
      element={<Dashboard />} 
      loader={async()=>{
        let isLoggedIn=false
        if(!isLoggedIn) {
          return  null
        }
        return null
      }}
      />
      <Route 
        path='income' 
        element={<Income />} 
        loader={async()=>{
          let isLoggedIn=false
          if(!isLoggedIn) {
            return  null
          }
          return null
        }}
        />
      <Route   
        path='vans' 
        element={<HostVan />} 
        loader={hostVanLoader}
        
        />
      <Route 
        path='vans/:id' 
        element={<HostVanDetail />} 
        loader={hostVanDetailLoader}
        >
        <Route 
          index 
          element={<HostVanInfo />} 
          loader={async()=>{
            let isLoggedIn=false
            if(!isLoggedIn) {
              return  null
            }
            return null
          }}
          />
        <Route 
          path='pricing' 
          element={<HostVanPricing />} 
          loader={async()=>{
            let isLoggedIn=false
            if(!isLoggedIn) {
              return  null
            }
            return null
          }}/>
        <Route 
          path='photos' 
          element={<HostVanPhotos />} 
          loader={async()=>{
            let isLoggedIn=false
            if(!isLoggedIn) {
              return  null
            }
            return null
          }}/>

      </Route>
      <Route 
        path='reviews' 
        element={<Reviews />} 
        loader={async()=>{
          let isLoggedIn=false
          if(!isLoggedIn) {
            return  null
          }
          return null
        }}/>
    </Route>
    <Route path='*' element={<NotFound />} />
  </Route>
))

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
createRoot(document.getElementById('root')).render(

  <App />

)

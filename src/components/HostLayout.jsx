import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import '../index.css'


function HeaderHost(){
  const myLink= 
    {
      fontWeight: 'bold',
      textDecoration: 'underline',
      color:' #161616'
}
    return (
        <nav className='host-nav'>
       <NavLink 
         to='/host'
        //  or to='.' 
         style={({ isActive }) => (isActive ? myLink : null)}
       >
        Dashboard</NavLink>

       <NavLink 
         to='income'
         style={({ isActive }) => (isActive ? myLink : null)}
       >
        Income
        </NavLink>

       <NavLink 
       to='vans'
       style={({ isActive }) => (isActive ? myLink : null)}
       >
        Vans
        </NavLink>

       <NavLink 
       to='reviews'
       style={({ isActive }) => (isActive ? myLink : null)}
       >
        Reviews
        </NavLink>
        </nav>
    )
}

function HostLayout() {
  return (
    <div>
       <HeaderHost />
       <Outlet />

    </div>
  )
}

export default HostLayout

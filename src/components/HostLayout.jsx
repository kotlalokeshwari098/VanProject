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
       style={({ isActive }) => (isActive ? myLink : null)}
       >
        Dashboard</NavLink>

       <NavLink 
       to='/host/income'
       style={({ isActive }) => (isActive ? myLink : null)}
       >
        Income
        </NavLink>

       <NavLink 
       to='/host/reviews'
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

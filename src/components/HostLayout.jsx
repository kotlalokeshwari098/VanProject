import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import '../index.css'


function HeaderHost(){
    return (
        <nav className='host-nav'>
       <Link to='/host'>Dashboard</Link>
       <Link to='/host/income'>Income</Link>
       <Link to='/host/reviews'>Reviews</Link>
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

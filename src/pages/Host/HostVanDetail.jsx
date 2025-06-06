import React, { useEffect, useState } from 'react'
import { useParams,Outlet, NavLink,Link, useLoaderData } from 'react-router-dom'
import { fetching } from '../../Api';
import { requireAuth } from '../../Utils';


export async function loader({params}){
    await requireAuth();

    return fetching(params.id);
}


function HostVanDetail() {
  // const [currentVan, setCurrentVan] = useState(null)
  const { id } = useParams()
  console.log(id)
  const currentVan=useLoaderData();
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}


  // useEffect(() => {
  //   fetch(`/api/host/vans/${id}`)
  //     .then(resp => resp.json())
  //     .then(data => setCurrentVan(data.vans[0]))
  //     console.log(currentVan)
  // }, [])
  // if (!currentVan) {
  //   return <h1>Loading...</h1>
  // }
  return (
    <section>
      <Link
        to=".."
        relative='path'
        className="back-button"
      >&larr; <span>Back to all vans</span></Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} width={300} height={200} />
          <div className="host-van-detail-info-text">
            <i
              className={`van-type van-type-${currentVan.type}`}
            >
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <Link />

        <nav className="host-van-detail-nav">
          <NavLink
            to='.'
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details</NavLink>
          <NavLink
            to='pricing'
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing</NavLink>
          <NavLink
            to='photos'
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos</NavLink>

        </nav>
        <Outlet  context={{currentVan}}/>

      </div>
    </section>
  )
}

export default HostVanDetail

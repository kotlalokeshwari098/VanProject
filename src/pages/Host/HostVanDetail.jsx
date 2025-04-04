import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function HostVanDetail() {
    const [currentVan,setCurrentVan] =useState(null)
    const {id}=useParams()
    console.log(id)

     useEffect(()=>{
          fetch(`/api/host/vans/${id}`)
          .then(resp=>resp.json())
          .then(data=>setCurrentVan(data.vans[0]))
     },[])
     console.log(currentVan)
     if (!currentVan) {
      return <h1>Loading...</h1>
  }
  return (
    <section>
            <Link
                to=".."
                 relative='path'
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} width={300} height={200}/>
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
            </div>
        </section>
  )
}

export default HostVanDetail

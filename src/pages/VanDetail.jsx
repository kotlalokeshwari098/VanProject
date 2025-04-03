import React, { useEffect, useState } from 'react'
import '../index.css'
import { useParams } from 'react-router-dom'


function VanDetail() {
    const [van,setVan]=useState();
    const params=useParams(null)
    console.log(params.id);


    useEffect(()=>{
      fetch(`/api/vans/${params.id}`)
        .then(res=>res.json())
        .then(data=>setVan(data.vans))
    },[params.id])


  return (
    <div className="van-detail-container">
    {van ? (
        <div className="van-detail">
            <img src={van.imageUrl} />
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <p className="van-price"><span>${van.price}</span>/day</p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
        </div>
    ) : <h2>Loading...</h2>}
</div>
  )
}

export default VanDetail


{/* <Route path="/products" element={<ProductDetail />} />

<Route path="/products/:productId" element={<ProductId />}>
------------
3. Add whatever you need to add for the component below to display
   the route parameter in the <h1>

import {useParams} from 'react-dom-router'
function ProductDetail() {
    let param=useParams()
    return <h1>Product detail of ${param.productId} is here</h1>
} */}

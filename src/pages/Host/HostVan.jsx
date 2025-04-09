import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetching } from '../../Api';


function Van() {
   const [vans,setVans]=useState([]);
   const [loading,setLoading]=useState(false);

    useEffect(()=>{
      async function vans(){
        setLoading(true)
        const data= await fetching();
         setVans(data);
         setLoading(false)
      }
      
      vans();
    },[])
    console.log( vans)

    if(loading){
        return <h2>Loading...</h2>
    }


    const hostList=vans.map(van=>(  
      <Link
            to={van.id}
            // relative path
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

  return (
    <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostList}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
  )
}

export default Van

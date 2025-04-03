import { useEffect, useState } from "react"
import '../index.css'
import { Link } from "react-router-dom"

export default function Vans() {
    const [vans, setVans] = useState([])


    useEffect(() => {
        fetch('/api/vans')
            .then(response => response.json())
            .then(data => setVans(data.vans));
    }, [])
    console.log(vans)

    
    const vanElements = vans.map(van => (
        <Link  to={`/vans/${van.id}`}
               aria-label=
               {`view details for ${van.name},priced at $${van.price} per day`}
        >
            <div key={van.id} className="van-tile">
            <img src={van.imageUrl} alt={`image of ${van.name}`}/>
            <div className="van-info">
                <p><b>{van.name}</b></p>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
        </Link>

    ))
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
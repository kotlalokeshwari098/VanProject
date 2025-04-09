import { useEffect, useState } from "react"
import '../index.css'
import { Link, useSearchParams } from "react-router-dom"
import { fetching } from '.././Api';
import { useLoaderData } from "react-router-dom"

export function loader(){
    return fetching();
}


export default function Vans() {
    // const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    // const [loading,setLoading]=useState(false);
    // const [error,setError]=useState(null);



    const data=useLoaderData();
    console.log(data);

    const typeFilter = searchParams.get('type')
    // console.log(typeFilter)
    // console.log(searchParams.toString())

    const filteredItems = typeFilter
        ? data.filter(item => item.type.toLowerCase() === typeFilter.toLowerCase())
        : data
        /*
    useEffect(() => {
        async function vans(){
                setLoading(true)
                try{
                    const data= await fetching();
                    setVans(data);
                }
                catch(err){
                    setError(err);
                }
                finally{
                    setLoading(false)

                }
        }
        vans();
    }, [])
    */
    // console.log(vans)
    // no need of useeffect() ,loading states,vans state when we are using  loaders

    // if(loading){
    //     return <h1 aria-live="polite">Loading....</h1>
    // }
    // if(error){
    //     return <h1 aria-live="assertive">There was an error:{error.message}</h1>
    // }

    const vanElements = filteredItems.map(van => (
        <Link 
           to={van.id}  
           state={{search: `?${searchParams.toString()} `}}
        // relative path
        // {`/vans/${van.id}`} absolute path 
            aria-label=
            {`view details for ${van.name},priced at $${van.price} per day`}
        >
            <div key={van.id} className="van-tile">
                <img src={van.imageUrl} alt={`image of ${van.name}`} />
                <div className="van-info">
                    <p><b>{van.name}</b></p>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
        </Link>

    ))
    
    function generateString(key,value){
        const sp=new URLSearchParams(searchParams)
        if(value===null){
            sp.delete(key)
        }
        else{
            sp.set(key,value)
        }
       return `?${sp.toString()}`;
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
               <Link 
               to={generateString('type','simple')}
               className={typeFilter==='simple' ?'van-type simple selected':'van-type simple'}
               >
                Simple</Link>
               <Link 
               to={generateString('type','luxury')}
               className={typeFilter==='luxury' ?'van-type luxury selected':'van-type luxury'}
               >
                Luxury</Link>
               <Link 
               to={generateString('type','rugged')}
               className={typeFilter==='rugged' ?'van-type rugged selected':'van-type rugged'}
               >
                Rugged</Link>
              { typeFilter ? 
                <Link to={generateString('type',null)}
                className="van-type clear-filters">Clear</Link>
                :null
              }
            </div>

            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}


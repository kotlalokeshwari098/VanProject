 export async function fetching(){  
    const res=await fetch('/api/vans')
    if(!res.ok){
        throw {
            message:"failed to fetch vans",
            statusText: res.statusText,
            status:res.status
        }
    }
    const data=await res.json();
    return data.vans;
 }
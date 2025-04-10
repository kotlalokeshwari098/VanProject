import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const error=useRouteError()
    console.log(error)
  return (
    <div>
      <h2>Error:
        {error.message}{error.status}</h2>
      
    </div>
  )
}

export default Error

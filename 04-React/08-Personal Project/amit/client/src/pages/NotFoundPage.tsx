// import React from 'react'
import { Link } from 'react-router-dom'
import "./NotFoundPgae.scss"

const NotFoundPage = () => {
  try {
    return (
    <div>
        <div className='notFoundContainer'>
           <div className='image'></div>
            <Link className='link' to='/'>Go to main page</Link> 
        </div>
    </div>
  )
  } catch (error) {
    console.error(error)
    return null
  }
   
  
}

export default NotFoundPage
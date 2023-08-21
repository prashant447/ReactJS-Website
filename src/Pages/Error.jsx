import React from 'react'
import { Link } from 'react-router-dom'
import '../Pages/error.css'

const Error = () => {
  return (
    <>
            <div className="error d-flex justify-content-center align-item-center flex-column error">
              <h2 className='founds'>404</h2>
              <div className="not-found">
                   <h1>WE ARE SORRY, PAGE NOT FOUND!</h1>
                   <p>THE PAGE YOU ARE LOOKING MIGHT HAVE BEEN REMOVED HAD ITS NAME CHANGED OR ITS TEMPORARILY UNAVAILABLE</p>

               <Link to='/'> <button className='btn-group'>BACK TO HOMEPAGE</button></Link>   
              </div>
            </div>
      
    </>
  )
}

export default Error

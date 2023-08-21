import React, { useState } from 'react'
import workApi from '../WorkApi'
import '../HowItsWork/work.css'


const HowItsWork = () => {
      const [workdata, setWorkData] = useState(workApi)
         console.log(workdata);
  return (
    <>
    
      <section>
        <div className="container work-section">
            <h1 className='main-heading text-center py-5'>How does it Work</h1>

            <div className="row inner-section">
         {
          workdata.map((currElem) =>{
            const {id, title, logo, info} = currElem
            return(
              <div className="col-lg-4 col-12" key={id}>
              <i className= {`fas fa-donate ${logo}`}></i>
                  <h2 className='sub-heading'>{title}</h2>
                  <p className='para'>{info}</p>
              </div>
            )

          })
         }

                
              
            </div>
        </div>
      </section>
    </>
  )
}

export default HowItsWork

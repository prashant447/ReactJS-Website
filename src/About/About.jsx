import React, { useState } from 'react'
import '../About/About.css'
import AboutApi from '../AboutApi'

const About = () => {
               const[aboutData, setAboutData] = useState(AboutApi)
           
  return (
    <>
      <div className="about-us ">
        <div className="container mb-3">
          <div className="row py-5 ">
            <div className="col-12 col-lg-7 right-side-img text-center  ">
                   <img src="image/3.jpg" alt="" srcset="" />
            </div>

            <div className="left-side col-12 col-lg-5 ">
              <h2 className='mini-title'>-- Available at Google and IOS App Store Only</h2>
          <h2 className='title-2'>How to use the App</h2>

          {
            aboutData.map(  (currElem) =>{
              const {id, title, info} = currElem
              
              return(
                <div className="row  area51 our-services" key={id}>
                <div className='col-1 services-number'>{id}</div>
                <div className="col-10">
                 <h2 className='title-3'>{title}</h2>
                 <p className='title-4'>{info}</p>
                </div>

         </div>
              )
            })
          }
                
               
                <div className="input-group-text1">Learn More</div>
            </div>

          </div>
        </div>
      </div>



      {/* section2 */}


      <div className="about-us ">
        <div className="container mb-3">
          <div className="row py-5 right-side">
           

            <div className="col-12 col-lg-5  ">
              <h2 className='mini-title'>-- Available at Google and IOS App Store Only</h2>
          <h2 className='title-2'>World class support is available 24/7</h2>

          {
            aboutData.map(  (currElem) =>{
              const {id, title, info} = currElem
              
              return(
                <div className="row our-services" key={id}>
                <div className='col-1 services-number'>{id}</div>
                <div className="col-10">
                 <h2 className='title-3'>{title}</h2>
                 <p className='title-4'>{info}</p>
                </div>

         </div>
              )
            })
          }
                
               
                <div className="input-group-text1">Learn More</div>
            </div>
            <div className="col-12 col-lg-7 right-side-img text-center  ">
                   <img src="image/4.jpg" alt="" srcset="" />
            </div>

          </div>
        </div>
      </div>


      
    </>
  )
}

export default About

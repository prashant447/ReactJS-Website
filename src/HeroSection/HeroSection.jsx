import React from 'react'
import '../HeroSection/HeroSection.css'

const HeroSection = () => {
  return (
    <>
    <div className="hero-section ">
                <div className="container left-hero-section  ">
                    <div className="row ">
                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-start flex-column ">
                      <h1 className='hero-heading'>Online Payment Made  Easy For You</h1>
                      <p className='hero-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam asperiores, impedit voluptate voluptatibus incidunt mollitia officia nemo minima? Laudantium, commodi. Aperiam dignissimos eligendi ab autem.</p>

                      <h3 className='hero-h3' >Get early access for you</h3>
                  
                
                  <div className=" input-field  mt-3 ">

                      <input className='rounded-pill input-hero '  type="email" placeholder='enter your email' />
                      <div className="input-group-text    ">Get it now</div>
                  </div>
                  </div>

                  
                {/* right section */}
             <div className=" main-image col-12 col-lg-6 d-flex justify-content-center align-items-center">
              <img  className=' img-fluid rounded-4 image-header image1'  src="/image/1.jpg" alt="" srcset="" />
              
             </div>


                  </div>
                  </div>



               
        </div>
        
   </>
  )
}

export default HeroSection


import React from 'react'
import '../footer/Footer.css'

const Footer = () => {
  return (
    <>
        <div className="footer ">
         <div className="container ">

         
            <div className="row ">
                <div className=" col-lg-10 col-12   mx-auto">
                  <div className="row">
                     <div className=" col-6 col-lg-3 company">
                     <h2  className='anchor'>Company</h2>
                       <li><a href='#'>About</a></li> 
                       <li><a href='#'>About</a></li> 
                       <li><a href='#'>About</a></li> 
                       <li><a href='#'>About</a></li> 
                        
                     </div>
                     <div className=" col-6 col-lg-3 company">
                     <h2 className='anchor'>Support</h2>
                       <li><a href='#'>About</a></li> 
                       <li><a href='#'>About</a></li> 
                       <li><a href='#'>About</a></li> 
                       <li><a href='#'>About</a></li> 
                        
                     </div>
                     <div className=" col-6 col-lg-3 company">
                     <h2 className='anchor'>Services</h2>
                       <li><a href='#'>About</a></li> 
                       <li><a href='#'>About</a></li> 
                       <li><a href='#'>About</a></li> 
                       <li><a href='#'>About</a></li> 
                        
                     </div>
                     <div className=" col-6 col-lg-3 company">
                     <h2 className='anchor'>Follows Us</h2>
                       
                       <div className="row">
                            <div className="col-3 mx-auto">
                              <a href='#'><i className='fab fa-instagram fontawesome-style'></i></a>
                            </div>
                            <div className="col-3 mx-auto">
                              <a href='#'><i className='fab fa-twitter fontawesome-style'></i></a>
                            </div>
                            <div className="col-3 mx-auto">
                              <a href='#'><i className='fab fa-facebook fontawesome-style'></i></a>
                            </div>
                            <div className="col-3 mx-auto">
                              <a href='#'><i className='fab fa-youtube fontawesome-style'></i></a>
                            </div>
                       </div>
                        
                     </div>
                    
                  
                  </div>
                     
                     

                     



                </div>
            </div>
            <hr />
            <div className="sub-footer mt-2">
               <p className='text-center'>Copyright @ 2021 GooglePay. All right reserved</p>
            </div>
            </div>
        </div>
      
    </>
  )
}

export default Footer

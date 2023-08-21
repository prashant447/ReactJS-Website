import React, { useState } from "react";
import "../contact/contact.css";

const Contact = () => {

  const initialValue = {
    firstName:'',
    lastName:'',
    phone:'',
    email:'',
    address:'',
    message:''
  }

  const [data, setData] = useState(initialValue)
  const {firstName, lastName, email, phone, address, message} = data

  const handleChange = (e) =>{
 
   
     setData({...data, [e.target.name]:e.target.value})
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()

    if(firstName && lastName && email, phone && address && message){

    try {
      const res = await fetch('https://react-contact-form-62b4a-default-rtdb.firebaseio.com/userData.json',{
      method:'POST',
      Headers:{'content-Type': 'application/json'},
      body:JSON.stringify(data)
    })

    setData(initialValue)
    
    if(res){
      alert('Submit successfully')
    }
    
  } 

    catch (error) {
        console.log(error)
    }

  }
    else{
      alert("Please Fill the data")
    }
    



  }
  
  return (
    <>
      <div className="contact-us">
        <div className="container  ">
          <div className="row  con-section">
            <div className="col-lg-6 col-12 ">
              <div className="left-side1 ">
                <h2 className=" fw-bold fs-1 my-3">Connect With Our <br/>Sales Team</h2>
                <p className=" fs-5 py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquam incidunt possimus aut sequi fugit impedit, corporis saepe doloremque veniam?
                </p>
                <img
                  src="image/5.jpg"
                  className=" img-fluid img-size"
                  alt="contactimg"
                />
              </div>
            </div>

            <div className="col-lg-6 col-12 d-flex align-items-center">
              <form action="" className="my-2" onSubmit={handleSubmit}>
                <input type="text"  className="name" placeholder="First Name" name="firstName" value={firstName} onChange={handleChange}/>
                <input type="text"  className="name"placeholder="Last Name" name="lastName" value={lastName} onChange={handleChange} />

                <div className="col-lg-6 col-12  ">
                  <input type="phone"  className = "phone-section"  placeholder="Phone Number" name="phone" value={phone} onChange={handleChange}/>
                  <input type="email" className = "phone-section"  placeholder="Email id" name="email" value={email} onChange={handleChange} />
                </div>

                <div className="col-lg-6 col-12">
                  <input type="text" placeholder="Address" className="add-section"  name="address" value={address} onChange={handleChange}/>
                </div>

                <div className="col-12">
                  <input type="text" placeholder="Enter your message" className="msg"  name="message" value={message} onChange={handleChange}/>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                  By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
                  </label>
                </div>
                <input type="submit"  value="Submit" className="input-group-texts" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

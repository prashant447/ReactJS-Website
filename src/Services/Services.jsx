import React, { useState } from "react";
import "../Services/Services.css";
import serviceApi from "../serviceApi";

const Services = () => {
  const [serviceData, setServiceData] = useState(serviceApi);
  return (
    <>
      <div className="service">
        <div className="container ">
          <h2 className="text-center main-heading my-5">How to send Money</h2>

          <div className="row d-flex justify-content-center align-item-center ">
            {serviceData.map((currElem) => {
              const { id, logo, title, info } = currElem;
              return (
                <div className="col-lg-4 col-12 register  " key={id}>
                  <div className="serivce1">
                    <i className={`fontawesome-style ${logo}`}></i>

                    <h2 className="text-center fw-bold my-5">{title}</h2>
                    <p className="text-center fs-4 ">{info}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

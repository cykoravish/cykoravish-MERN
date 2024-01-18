import React from "react";
import { useAuth } from "../store/auth";

export const Service = () => {
  const { services } = useAuth();
  // console.log("services is ", services);

  return (
    <section className="section-service">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>

      <div className="container grid grid-three-cols">
        {services.map((curElem, index) => {
          const { price, description, provider, service } = curElem;
          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img
                  src="/images/design.png"
                  alt="our services img"
                  width="500"
                />
              </div>
              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <h2>{description}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

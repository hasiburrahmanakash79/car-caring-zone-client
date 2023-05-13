import { useEffect, useState } from "react";
import ServiceCard from "../serviceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="px-4">
      <div className="text-center mt-3">
        <h6 className="text-2xl font-bold text-[#FF3811]"> Services</h6>
        <h1 className="text-6xl font-bold my-4">Our Service Area</h1>
        <p className="text-lg mb-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center my-7">
        <button className="btn btn-outline btn-error">More Services</button>
      </div>
    </div>
  );
};

export default Services;

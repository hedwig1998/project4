import React, { useEffect, useState } from "react";

const FactsSection = () => {
  const [experience, setExperience] = useState(0);
  const [trainers, setTrainers] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    // Custom counter effect
    const increment = (start, end, setter) => {
      let current = start;
      const step = Math.ceil((end - start) / 100); // Increment value
      const interval = setInterval(() => {
        current += step;
        if (current >= end) {
          current = end;
          clearInterval(interval);
        }
        setter(current);
      }, 10); // Adjust this for speed
    };

    increment(0, 12345, setExperience);
    increment(0, 12345, setTrainers);
    increment(0, 12345, setProjects);
    increment(0, 12345, setClients);
  }, []);

  return (
    <div className="container-fluid bg-dark facts p-5 my-5">
      <div className="row gx-5 gy-4 py-5">
        <div className="col-lg-3 col-md-6">
          <div className="d-flex">
            <div
              className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: "60px", height: "60px" }}
            >
              <i className="fa fa-star fs-4 text-white"></i>
            </div>
            <div className="ps-4">
              <h5 className="text-secondary text-uppercase">Experience</h5>
              <h1 className="display-5 text-white mb-0">{experience}</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex">
            <div
              className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: "60px", height: "60px" }}
            >
              <i className="fa fa-users fs-4 text-white"></i>
            </div>
            <div className="ps-4">
              <h5 className="text-secondary text-uppercase">Our Trainers</h5>
              <h1 className="display-5 text-white mb-0">{trainers}</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex">
            <div
              className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: "60px", height: "60px" }}
            >
              <i className="fa fa-check fs-4 text-white"></i>
            </div>
            <div className="ps-4">
              <h5 className="text-secondary text-uppercase">Complete Project</h5>
              <h1 className="display-5 text-white mb-0">{projects}</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex">
            <div
              className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: "60px", height: "60px" }}
            >
              <i className="fa fa-mug-hot fs-4 text-white"></i>
            </div>
            <div className="ps-4">
              <h5 className="text-secondary text-uppercase">Happy Clients</h5>
              <h1 className="display-5 text-white mb-0">{clients}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactsSection;

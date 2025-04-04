import React from 'react';


const TeamTrainer = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid bg-primary p-5 bg-hero mb-5">
        <div className="row py-5">
          <div className="col-12 text-center">
            <h1 className="display-2 text-uppercase text-white mb-md-4">Trainers</h1>
            <a href="#" className="btn btn-primary py-md-3 px-md-5 me-3">
              Home
            </a>
            <a href="#" className="btn btn-light py-md-3 px-md-5">
              Trainers
            </a>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container-fluid p-5">
        <div className="mb-5 text-center">
          <h5 className="text-primary text-uppercase">The Team</h5>
          <h1 className="display-3 text-uppercase mb-0">Expert Trainers</h1>
        </div>
        <div className="row g-5">
          {[
            { name: 'John Deo', img: 'img/team-1.jpg' },
            { name: 'James Taylor', img: 'img/team-2.jpg' },
            { name: 'Adam Phillips', img: 'img/team-3.jpg' },
            { name: 'John Deo', img: 'img/team-2.jpg' },
            { name: 'James Taylor', img: 'img/team-3.jpg' },
            { name: 'Adam Phillips', img: 'img/team-1.jpg' },
          ].map((trainer, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="team-item position-relative">
                <div className="position-relative overflow-hidden rounded">
                  <img className="img-fluid w-100" src={trainer.img} alt={trainer.name} />
                  <div className="team-overlay">
                    <div className="d-flex align-items-center justify-content-start">
                      <a className="btn btn-light btn-square rounded-circle mx-1" href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-light btn-square rounded-circle mx-1" href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-light btn-square rounded-circle mx-1" href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4"
                  style={{ background: 'rgba(34, 36, 41, .9)' }}
                >
                  <h5 className="text-uppercase text-light">{trainer.name}</h5>
                  <p className="text-uppercase text-secondary m-0">Trainer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamTrainer;

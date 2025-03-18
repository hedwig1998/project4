import React from 'react';

const TeamSection = () => {
  return (
    <div className="container-fluid p-5">
      <div className="mb-5 text-center">
        <h5 className="text-primary text-uppercase">The Team</h5>
        <h1 className="display-3 text-uppercase mb-0">Expert Trainers</h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-4 col-md-6">
          <div className="team-item position-relative">
            <div className="position-relative overflow-hidden rounded">
              <img className="img-fluid w-100" src="img/team-1.jpg" alt="John Deo" />
              <div className="team-overlay">
                <div className="d-flex align-items-center justify-content-start">
                  <a
                    className="btn btn-light btn-square rounded-circle mx-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-light btn-square rounded-circle mx-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-light btn-square rounded-circle mx-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4"
              style={{ background: 'rgba(34, 36, 41, .9)' }}
            >
              <h5 className="text-uppercase text-light">John Deo</h5>
              <p className="text-uppercase text-secondary m-0">Trainer</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="team-item position-relative">
            <div className="position-relative overflow-hidden rounded">
              <img className="img-fluid w-100" src="img/team-2.jpg" alt="James Taylor" />
              <div className="team-overlay">
                <div className="d-flex align-items-center justify-content-start">
                  <a
                    className="btn btn-light btn-square rounded-circle mx-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-light btn-square rounded-circle mx-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-light btn-square rounded-circle mx-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4"
              style={{ background: 'rgba(34, 36, 41, .9)' }}
            >
              <h5 className="text-uppercase text-light">James Taylor</h5>
              <p className="text-uppercase text-secondary m-0">Trainer</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="team-item position-relative">
            <div className="position-relative overflow-hidden rounded">
              <img className="img-fluid w-100" src="img/team-3.jpg" alt="Adam Phillips" />
              <div className="team-overlay">
                <div className="d-flex align-items-center justify-content-start">
                  <a
                    className="btn btn-light btn-square rounded-circle mx-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-light btn-square rounded-circle mx-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-light btn-square rounded-circle mx-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4"
              style={{ background: 'rgba(34, 36, 41, .9)' }}
            >
              <h5 className="text-uppercase text-light">Adam Phillips</h5>
              <p className="text-uppercase text-secondary m-0">Trainer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

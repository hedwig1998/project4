import React from 'react';
import { Link } from 'react-router-dom';

const TeamTrainer = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid bg-primary p-5 bg-hero mb-5">
        <div className="row py-5">
          <div className="col-12 text-center">
            <h1 className="display-2 text-uppercase text-white mb-md-4">Huấn luyện viên</h1>
            <Link to={"/"} className="btn btn-primary py-md-3 px-md-5 me-3">
              Trang chủ
            </Link>
            <Link to={"/trainer"} className="btn btn-light py-md-3 px-md-5">
              Huấn luyện viên
            </Link>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container-fluid p-5">
        <div className="mb-5 text-center">
          <h5 className="text-primary text-uppercase">Đội của chúng tôi</h5>
          <h1 className="display-3 text-uppercase mb-0">Huấn luyện viên chuyên nghiệp</h1>
        </div>
        <div className="row g-5">
          {[
            { name: 'John Deo', img: 'img/team-1.jpg' },
            { name: 'James Taylor', img: 'img/team-2.jpg' },
            { name: 'Adam Phillips', img: 'img/team-3.jpg' },
          ].map((trainer, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="team-item position-relative">
                <div className="position-relative overflow-hidden rounded">
                  <img className="img-fluid w-100" src={trainer.img} alt={trainer.name} />
                  <div className="team-overlay">
                    <div className="d-flex align-items-center justify-content-start">
                      <Link className="btn btn-light btn-square rounded-circle mx-1" to={""}>
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link className="btn btn-light btn-square rounded-circle mx-1" to={""}>
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link className="btn btn-light btn-square rounded-circle mx-1" to={""}>
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4"
                  style={{ background: 'rgba(34, 36, 41, .9)' }}
                >
                  <h5 className="text-uppercase text-light">{trainer.name}</h5>
                  <p className="text-uppercase text-secondary m-0">Huấn luyện viên</p>
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

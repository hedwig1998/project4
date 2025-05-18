import React from 'react';

const AboutSection = () => {
  return (
    <div className="container-fluid p-5">
      <div className="row gx-5">
        <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: '500px' }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100 rounded"
              src="img/about.jpg"
              alt="About Us"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="mb-4">
            <h5 className="text-primary text-uppercase">About Us</h5>
            <h1 className="display-3 text-uppercase mb-0">Welcome to Gymster</h1>
          </div>
          <h4 className="text-body mb-4">
            At Gymster, we're more than just a gym; we're a vibrant community dedicated to empowering you on your unique fitness journey. 
            We believe that achieving your health goals should be an inspiring and enjoyable experience. 
            Our mission is to provide a supportive, motivating, and state-of-the-art environment where everyone, from beginners to seasoned athletes, can thrive, push their limits, and discover their strength. 
            Join us and become part of a family that celebrates every step of your progress.
          </h4>
          <div className="rounded bg-dark p-5">
            <ul className="nav nav-pills justify-content-between mb-3">
              <li className="nav-item w-50">
                <a
                  className="nav-link text-uppercase text-center w-100 active"
                  data-bs-toggle="pill"
                  href="#pills-1"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item w-50">
                <a
                  className="nav-link text-uppercase text-center w-100"
                  data-bs-toggle="pill"
                  href="#pills-2"
                >
                  Why Choose Us
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="pills-1">
                <p className="text-secondary mb-0">
                  We are your partners in health and fitness, committed to providing an exceptional gym experience. 
                  At Gymster, our focus is on creating a positive and results-oriented atmosphere where you can achieve your personal best. 
                  We offer top-quality equipment, expert trainers, and a motivating environment designed to help you succeed, no matter your current fitness level. 
                  Start your journey to a stronger, healthier you with us today.
                </p>
              </div>
              <div className="tab-pane fade" id="pills-2">
                <p className="text-secondary mb-0">
                  Work out on the latest and most effective fitness equipment in a clean, modern, and energizing space.
                  Our experienced trainers offer personalized support and guidance to ensure you train smart and see results.
                  Enjoy a wide selection of group fitness classes and training programs tailored to different interests and abilities.
                  We're dedicated to helping you achieve tangible fitness outcomes and build sustainable healthy habits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

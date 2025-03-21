import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Add this for carousel styles

const TestimonialSection = () => {
  return (
    <div className="container-fluid p-0 my-5">
      <div className="row g-0">
        <div className="col-lg-6" style={{ minHeight: '500px' }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100"
              src="img/testimonial.jpg"
              style={{ objectFit: 'cover' }}
              alt="testimonial background"
            />
          </div>
        </div>
        <div className="col-lg-6 bg-dark p-5">
          <div className="mb-5">
            <h5 className="text-primary text-uppercase">Testimonial</h5>
            <h1 className="display-3 text-uppercase text-light mb-0">Our Client Say</h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
            <Carousel>
              <div className="testimonial-item">
                <p className="fs-4 fw-normal text-light mb-4">
                  <i className="fa fa-quote-left text-primary me-3"></i>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.
                </p>
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" alt="client 1" />
                  <div className="ps-4">
                    <h5 className="text-uppercase text-light">Client Name</h5>
                    <span className="text-uppercase text-secondary">Profession</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <p className="fs-4 fw-normal text-light mb-4">
                  <i className="fa fa-quote-left text-primary me-3"></i>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.
                </p>
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" alt="client 2" />
                  <div className="ps-4">
                    <h5 className="text-uppercase text-light">Client Name</h5>
                    <span className="text-uppercase text-secondary">Profession</span>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

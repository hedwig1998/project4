import React from "react";

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid bg-primary p-5 bg-hero mb-5">
        <div className="row py-5">
          <div className="col-12 text-center">
            <h1 className="display-2 text-uppercase text-white mb-md-4">Contact</h1>
            <a href="/" className="btn btn-primary py-md-3 px-md-5 me-3">
              Home
            </a>
            <a href="/contact" className="btn btn-light py-md-3 px-md-5">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container-fluid p-5">
        <div className="mb-5 text-center">
          <h5 className="text-primary text-uppercase">Contact Us</h5>
          <h1 className="display-3 text-uppercase mb-0">Get In Touch</h1>
        </div>
        <div className="row g-5 mb-5">
          {[
            {
              icon: "fa-map-marker-alt",
              title: "Visit Us",
              description: "123 Street, New York, USA",
            },
            {
              icon: "fa-envelope",
              title: "Email Us",
              description: "info@example.com",
            },
            {
              icon: "fa-phone",
              title: "Call Us",
              description: "+012 345 6789",
            },
          ].map((item, index) => (
            <div className="col-lg-4" key={index}>
              <div className="d-flex flex-column align-items-center bg-dark rounded text-center py-5 px-3">
                <div
                  className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className={`fa ${item.icon} fs-4 text-white`}></i>
                </div>
                <h5 className="text-uppercase text-primary">{item.title}</h5>
                <p className="text-secondary mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="bg-dark p-5">
              <form>
                <div className="row g-3">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="email"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Subject"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control bg-light border-0 px-4 py-3"
                      rows="4"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <iframe
              className="w-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameBorder="0"
              style={{ height: "457px", border: "0" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

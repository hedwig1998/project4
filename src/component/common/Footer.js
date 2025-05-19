import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <div className="container-fluid bg-dark text-secondary px-5 mt-5">
        <div className="row gx-5">
          {/* Get In Touch Section */}
          <div className="col-lg-8 col-md-6">
            <div className="row gx-5">
              <div className="col-lg-4 col-md-12 pt-5 mb-5">
                <h4 className="text-uppercase text-light mb-4">Liên hệ</h4>
                <div className="d-flex mb-2">
                  <i className="bi bi-geo-alt text-primary me-2"></i>
                  <p className="mb-0">123 Street, New York, USA</p>
                </div>
                <div className="d-flex mb-2">
                  <i className="bi bi-envelope-open text-primary me-2"></i>
                  <p className="mb-0">tuanlinh24680@gmail.com</p>
                </div>
                <div className="d-flex mb-2">
                  <i className="bi bi-telephone text-primary me-2"></i>
                  <p className="mb-0">+84 339529966</p>
                </div>
                <div className="d-flex mt-4">
                  <Link className="btn btn-primary btn-square rounded-circle me-2" to={"/"}>
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-primary btn-square rounded-circle me-2" to={"/"}>
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-primary btn-square rounded-circle me-2" to={"/"}>
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link className="btn btn-primary btn-square rounded-circle" to={"/"}>
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>

              {/* Quick Links Section */}
              <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                <h4 className="text-uppercase text-light mb-4">Liên kết nhanh</h4>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-secondary mb-2" to={"/home"}>
                    <i className="bi bi-arrow-right text-primary me-2"></i>Trang chủ
                  </Link>
                  {/* <Link className="text-secondary mb-2" to={"/about"}>
                    <i className="bi bi-arrow-right text-primary me-2"></i>About Us
                  </Link> */}
                  <Link className="text-secondary mb-2" to={"/rank"}>
                    <i className="bi bi-arrow-right text-primary me-2"></i>Xếp hạng
                  </Link>
                  <Link className="text-secondary mb-2" to={"/trainer"}>
                    <i className="bi bi-arrow-right text-primary me-2"></i>Huấn luyện viên
                  </Link>
                  <Link className="text-secondary mb-2" to={"/blog"}>
                    <i className="bi bi-arrow-right text-primary me-2"></i>Blog mới nhất
                  </Link>
                  <Link className="text-secondary" to={"/subscription"}>
                    <i className="bi bi-arrow-right text-primary me-2"></i>Subscriptions
                  </Link>
                </div>
              </div>

              {/* Popular Links Section */}
              <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                <h4 className="text-uppercase text-light mb-4">Liên kết phổ biến</h4>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-secondary mb-2" to={"/home"}>
                    <i className="bi bi-arrow-right text-primary me-2"></i>Trang chủ
                  </Link>
                  {/* <Link className="text-secondary mb-2" to={"/about"}>
                    <i className="bi bi-arrow-right text-primary me-2"></i>About Us
                  </Link> */}
                  <Link className="text-secondary mb-2" to={"/rank"}>
                    <i className="bi bi-arrow-right text-primary me-2"></i>Xếp hạng
                  </Link>
                  <Link className="text-secondary mb-2" to={"/trainer"}>
                    <i className="bi bi-arrow-right text-primary me-2"></i>Huấn luyện viên
                  </Link>
                  <Link className="text-secondary mb-2" to={"/blog"}>
                    <i className="bi bi-arrow-right text-primary me-2"></i>Blog mới nhất
                  </Link>
                  <Link className="text-secondary" to={"/subscription"}>
                    <i className="bi bi-arrow-right text-primary me-2"></i>Subscriptions
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-5">
              {/* <h4 className="text-uppercase text-white mb-4">Newsletter</h4>
              <h6 className="text-uppercase text-white">Subscribe Our Newsletter</h6>
              <p className="text-light">
                Amet justo diam dolor rebum lorem sit stet sea justo kasd
              </p>
              <form action="">
                <div className="input-group">
                  <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                  <button className="btn btn-dark">Sign Up</button>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="container-fluid py-4 py-lg-0 px-5" style={{ background: '#111111' }}>
        <div className="row gx-5">
          <div className="col-lg-8">
            <div className="py-lg-4 text-center">
              <p className="text-secondary mb-0">
                &copy; <a className="text-light fw-bold" href="#">Team 2</a>. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <a href="#" className="btn btn-dark py-3 fs-4 back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
};

export default Footer;

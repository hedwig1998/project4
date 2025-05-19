import React from 'react';
import { Link } from 'react-router-dom';
const Carousel = () => {
  const isLoggedIn = localStorage.getItem('token');

  const handleJoinClick = (e) => {
    if (isLoggedIn) {
      e.preventDefault();
    }

  };
  return (
    <div className="container-fluid p-0 mb-5">
      <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Carousel Item 1 */}
          <div className="carousel-item active">
            <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: '900px' }}>
                <h5 className="text-white text-uppercase">Trung tâm tập gym tốt nhất</h5>
                <h1 className="display-2 text-white text-uppercase mb-md-4">
                  Xây Dựng Cơ Thể Khỏe Mạnh Với Training Souls 
                </h1>
                <Link 
                  to={isLoggedIn ? "/profile" : "/login"} 
                  className="btn btn-primary py-md-3 px-md-5 me-3"
                  onClick={handleJoinClick}
                >
                  {isLoggedIn ? "Tham gia" : "Tham gia"}
                </Link>
                {/* <Link to={"/contact"} className="btn btn-light py-md-3 px-md-5">
                  Contact Us
                </Link> */}
              </div>
            </div>
          </div>

          {/* Carousel Item 2 */}
          <div className="carousel-item">
            <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: '900px' }}>
                <h5 className="text-white text-uppercase">Trung tâm tập gym tốt nhất</h5>
                <h1 className="display-2 text-white text-uppercase mb-md-4">
                  Tăng cường sức mạnh của bạn với huấn luyện viên của chúng tôi                
                </h1>
                <Link 
                  to={isLoggedIn ? "/profile" : "/login"} 
                  className="btn btn-primary py-md-3 px-md-5 me-3"
                  onClick={handleJoinClick}
                >
                  {isLoggedIn ? "Tham gia" : "Tham gia"}
                </Link>
                {/* <Link to={"#"} className="btn btn-light py-md-3 px-md-5">
                  Contact Us
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

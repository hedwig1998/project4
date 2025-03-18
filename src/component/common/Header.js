import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assest/css/bootstrap.min.css';

const Header = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null); // Lưu thông tin người dùng
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Quản lý trạng thái dropdown

  // Hàm lấy thông tin người dùng từ API
  const fetchUserInfo = async () => {
    const token = localStorage.getItem('token'); // Lấy token từ localStorage
    if (!token) return; // Nếu không có token, thoát khỏi hàm

    try {
      const response = await fetch('http://localhost:8080/trainingSouls/users/getMyInfo', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`, // Gửi token trong header
        },
      });

      const data = await response.json();
      if (data.code === 0 && data.result) {
        setUserInfo(data.result); // Lưu thông tin người dùng vào state
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  // Hàm xử lý logout
  const handleLogout = () => {
    localStorage.removeItem('token'); 
    setUserInfo(null);
    navigate('/login');
  };

  // Gọi API khi component được render
  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <div className="container-fluid bg-dark px-0">
      <div className="row gx-0">
        {/* Logo Section */}
        <div className="col-lg-3 bg-dark d-none d-lg-block">
          <a
            href="index.html"
            className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
          >
            <h1 className="m-0 display-4 text-primary text-uppercase">For Health</h1>
          </a>
        </div>

        {/* Header Info and Navigation */}
        <div className="col-lg-9">
          {/* Contact and Social Media */}
          <div className="row gx-0 bg-secondary d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                <i className="fa fa-envelope text-primary me-2"></i>
                <h6 className="mb-0">info@example.com</h6>
              </div>
              <div className="h-100 d-inline-flex align-items-center py-2">
                <i className="fa fa-phone-alt text-primary me-2"></i>
                <h6 className="mb-0">0989000568</h6>
              </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
              <div className="d-inline-flex align-items-center py-2">
                <a className="btn btn-light btn-square rounded-circle me-2" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-light btn-square rounded-circle me-2" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-light btn-square rounded-circle me-2" href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="btn btn-light btn-square rounded-circle me-2" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-light btn-square rounded-circle" href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Navbar */}
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
            <a href="index.html" className="navbar-brand d-block d-lg-none">
              <h1 className="m-0 display-4 text-primary text-uppercase">Gymster</h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav mr-auto py-0">
                <a href="/" className="nav-item nav-link active">
                  Home
                </a>
                <a href="/about" className="nav-item nav-link">
                  About
                </a>
                <a href="/class" className="nav-item nav-link">
                  Classes
                </a>
                <a href="/trainer" className="nav-item nav-link">
                  Trainers
                </a>
                <a href="/blog" className="nav-item nav-link">
                  Blog Grid
                </a>
                <a href="/rank" className="nav-item nav-link">
                  Your Rank
                </a>
                <a href="/subscription" className="nav-item nav-link">
                  Subscription
                </a>
              </div>

              {userInfo ? (
                <div className="dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {userInfo.name}
                  </button>
                  {isDropdownOpen && (
                    <div className="dropdown-menu dropdown-menu-end" style={{display: "flow-root"}}>
                      <a className="dropdown-item" href="/userinfo">
                        My Account
                      </a>
                      <a className="dropdown-item" href="">
                        Coin: {userInfo.points}
                      </a>
                      <button className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <a href="/login" className="btn btn-primary py-md-3 px-md-5 d-none d-lg-block">
                  Join Us
                </a>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
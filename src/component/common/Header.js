import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import '../../assest/css/bootstrap.min.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [userInfo, setUserInfo] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const fetchUserInfo = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetch('http://54.251.220.228:8080/trainingSouls/users/getMyInfo', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.code === 0 && data.result) {
        setUserInfo(data.result);
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserInfo(null);
    navigate('/login');
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  // kiểm tra xem nav-item có active không
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="container-fluid bg-dark px-0">
      <div className="row gx-0">
        {/* Logo Section */}
        <div className="col-lg-3 bg-dark d-none d-lg-block">
          <Link
            to={"/"}
            className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
          >
            <h1 className="m-0 display-5 text-primary text-uppercase">Training Souls</h1>
          </Link>
        </div>

        {/* Header Info and Navigation */}
        <div className="col-lg-9">
          {/* Contact and Social Media */}
          <div className="row gx-0 bg-secondary d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                <i className="fa fa-envelope text-primary me-2"></i>
                <h6 className="mb-0">tuanlinh24680@gmail.com</h6>
              </div>
              <div className="h-100 d-inline-flex align-items-center py-2">
                <i className="fa fa-phone-alt text-primary me-2"></i>
                <h6 className="mb-0">0339529966</h6>
              </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
              <div className="d-inline-flex align-items-center py-2">
                <Link className="btn btn-light btn-square rounded-circle me-2" to={"/"}>
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link className="btn btn-light btn-square rounded-circle me-2" to={"/"}>
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link className="btn btn-light btn-square rounded-circle me-2" to={"/"}>
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link className="btn btn-light btn-square rounded-circle me-2" to={"/"}>
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link className="btn btn-light btn-square rounded-circle" to={"/"}>
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Navbar */}
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
            <a href="index.html" className="navbar-brand d-block d-lg-none">
              <h1 className="m-0 display-4 text-primary text-uppercase">Training Souls</h1>
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
                <Link to={"/"} className={`nav-item nav-link ${isActive('/') ? 'active' : ''}`}>
                  Trang chủ
                </Link>
                {/* <Link to={"/about"} className={`nav-item nav-link ${isActive('/about') ? 'active' : ''}`}>
                  About
                </Link> */}
                {/* <Link to={"/class"} className={`nav-item nav-link ${isActive('/class') ? 'active' : ''}`}>
                  Classes
                </Link> */}
                <Link to={"/trainer"} className={`nav-item nav-link ${isActive('/trainer') ? 'active' : ''}`}>
                  Huấn luyện viên
                </Link>
                <Link to={"/blog"} className={`nav-item nav-link ${isActive('/blog') ? 'active' : ''}`}>
                  Bài viết
                </Link>
                <Link to={"/rank"} className={`nav-item nav-link ${isActive('/rank') ? 'active' : ''}`}>
                  Xếp hạng
                </Link>
                {/* <Link to={"/subscription"} className={`nav-item nav-link ${isActive('/subscription') ? 'active' : ''}`}>
                  Subscription
                </Link> */}
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
                      <Link className="dropdown-item" to={"/userinfo"}>
                        Thông tin
                      </Link>
                      {/* <Link className="dropdown-item">
                        Xu: {userInfo.points}
                      </Link> */}
                      <button className="dropdown-item" onClick={handleLogout}>
                        Đăng xuất
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to={"/login"} className="btn btn-primary py-md-3 px-md-5 d-none d-lg-block">
                  Tham gia
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
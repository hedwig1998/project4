import React, { useState, useEffect } from 'react';
import '../../assest/css/UserInfo.css';

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);

  const fetchUserInfo = async () => {
    const token = localStorage.getItem('token'); // Lấy token từ localStorage
    if (!token) return; // Nếu không có token, thoát khỏi hàm

    try {
      const response = await fetch('http://54.251.220.228:8080/trainingSouls/users/getMyInfo', {
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

  useEffect(() => {
      fetchUserInfo();
    }, []);

  return (
    <div className="user-info-container">
      <h1 className="user-info-title">Thông tin người dùng</h1>
      {userInfo ? (
        <div className="user-info-card">
          <p><strong>Tên:</strong> {userInfo.name}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <p><strong>Loại tài khoản:</strong> {userInfo.accountType}</p>
          <p><strong>Xu:</strong> {userInfo.points}</p>
          <p><strong>Cấp độ:</strong> {userInfo.level || 'Không có thông tin'}</p>
        </div>
      ) : (
        <p>Không có dữ liệu người dùng</p>
      )}
    </div>
  );
};

export default UserInfo;
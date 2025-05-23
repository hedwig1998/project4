import React, { useState, useEffect } from 'react';
import '../../assest/css/UserInfo.css'; 

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hàm để định dạng ngày tháng
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch (e) {
      return dateString; 
    }
  };

  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return 'N/A';
    try {
      return new Date(dateTimeString).toLocaleString('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch (e) {
      return dateTimeString;
    }
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      setIsLoading(true);
      setError(null);
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Bạn chưa đăng nhập.');
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch('http://54.251.220.228:8080/trainingSouls/users/getMyInfo', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Lỗi HTTP: ${response.status}`);
        }

        const data = await response.json();
        if (data.code === 0 && data.result) {
          setUserInfo(data.result);
        } else {
          setError(data.message || 'Không thể lấy thông tin người dùng.');
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
        setError(error.message || 'Đã xảy ra lỗi khi tải dữ liệu.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  if (isLoading) {
    return <div className="user-info-container"><p>Đang tải thông tin người dùng...</p></div>;
  }

  if (error) {
    return <div className="user-info-container error-message"><p>{error}</p></div>;
  }

  if (!userInfo) {
    return <div className="user-info-container"><p>Không có dữ liệu người dùng.</p></div>;
  }

  return (
    <div className="user-info-container">
      <h1 className="user-info-title">Thông Tin Cá Nhân</h1>

      <div className="user-info-section">
        <h2 className="user-info-subtitle">Thông Tin Tài Khoản</h2>
        <div className="user-info-card">
          <p><strong>Tên:</strong> {userInfo.name || 'N/A'}</p>
          <p><strong>Email:</strong> {userInfo.email || 'N/A'}</p>
          <p><strong>Loại tài khoản:</strong> {userInfo.accountType || 'N/A'}</p>
          <p><strong>Xu (Points):</strong> {userInfo.points != null ? userInfo.points : 'N/A'}</p>
          <p><strong>Cấp độ (Level):</strong> {userInfo.level != null ? userInfo.level : 'N/A'}</p>
          <p><strong>Chuỗi ngày (Streak):</strong> {userInfo.streak != null ? userInfo.streak : 'N/A'}</p>
          {userInfo.totalScore != null && (
            <p><strong>Tổng điểm (Total Score):</strong> {userInfo.totalScore}</p>
          )}
        </div>
      </div>

      {userInfo.userProfile && (
        <div className="user-info-section">
          <h2 className="user-info-subtitle">Hồ Sơ Thể Chất</h2>
          <div className="user-info-card profile-card">
            <p><strong>Giới tính:</strong> {userInfo.userProfile.gender || 'N/A'}</p>
            <p><strong>Tuổi:</strong> {userInfo.userProfile.age != null ? userInfo.userProfile.age : 'N/A'}</p>
            <p><strong>Chiều cao:</strong> {userInfo.userProfile.height != null ? `${userInfo.userProfile.height} cm` : 'N/A'}</p>
            <p><strong>Cân nặng:</strong> {userInfo.userProfile.weight != null ? `${userInfo.userProfile.weight} kg` : 'N/A'}</p>
            <p><strong>Mục tiêu luyện tập:</strong> {userInfo.userProfile.fitnessGoal || 'N/A'}</p>
            <p><strong>Trình độ:</strong> {userInfo.userProfile.level || 'N/A'}</p>
            <p><strong>Mức độ hoạt động:</strong> {userInfo.userProfile.activityLevel || 'N/A'}</p>
            {userInfo.userProfile.bmi != null && <p><strong>BMI:</strong> {userInfo.userProfile.bmi.toFixed(2)}</p>}
            {userInfo.userProfile.bodyFatPercentage != null && <p><strong>Tỷ lệ mỡ cơ thể (%):</strong> {userInfo.userProfile.bodyFatPercentage.toFixed(2)}%</p>}
            {userInfo.userProfile.muscleMassPercentage != null && <p><strong>Tỷ lệ cơ bắp (%):</strong> {userInfo.userProfile.muscleMassPercentage.toFixed(2)}%</p>}
            {userInfo.userProfile.medicalConditions && userInfo.userProfile.medicalConditions.length > 0 && (
              <p><strong>Tình trạng y tế:</strong> {userInfo.userProfile.medicalConditions.join(', ')}</p>
            )}
            <div className="stats-grid">
              <p><strong>Sức mạnh:</strong> {userInfo.userProfile.strength != null ? userInfo.userProfile.strength : 'N/A'}</p>
              <p><strong>Sức bền:</strong> {userInfo.userProfile.endurance != null ? userInfo.userProfile.endurance : 'N/A'}</p>
              <p><strong>Sức khỏe:</strong> {userInfo.userProfile.health != null ? userInfo.userProfile.health : 'N/A'}</p>
              <p><strong>Nhanh nhẹn:</strong> {userInfo.userProfile.agility != null ? userInfo.userProfile.agility : 'N/A'}</p>
            </div>
            {userInfo.userProfile.deathPoints != null && <p><strong>Điểm tử (Death Points):</strong> {userInfo.userProfile.deathPoints}</p>}
          </div>
        </div>
      )}

      {userInfo.purchasedItems && (
        <div className="user-info-section">
          <h2 className="user-info-subtitle">Lịch Sử Mua Hàng</h2>
          <div className="purchased-items-table-container"> 
            <table className="purchased-items-table">
              <thead>
                <tr>
                  <th>ID Giao dịch</th>
                  <th>ID Gói</th>
                  <th>Ngày mua</th>
                  <th>Ngày hết hạn</th>
                </tr>
              </thead>
              <tbody>
                {userInfo.purchasedItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.itemId}</td>
                    <td>{formatDateTime(item.purchasedAt)}</td>
                    <td>{item.expirationDate ? formatDate(item.expirationDate) : 'Vĩnh viễn'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
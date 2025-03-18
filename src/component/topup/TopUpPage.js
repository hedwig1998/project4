import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assest/css/topUpPage.css";

const TopUpPage = () => {
  const navigate = useNavigate();

  // Các mệnh giá nạp tiền
  const topUpAmounts = [75000, 150000, 375000, 750000, 1500000];

  // Xử lý khi người dùng chọn mệnh giá nạp tiền
  const handleTopUp = async (amount) => {
    const token = localStorage.getItem("token"); // Lấy token từ localStorage
    if (!token) {
      alert("Vui lòng đăng nhập để thực hiện nạp tiền.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/trainingSouls/payment/vn-pay?amount=${amount}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      // Kiểm tra phản hồi từ API
      if (response.ok && data.code === 200 && data.data.paymentUrl) {
        // Chuyển hướng đến paymentUrl
        window.location.href = data.data.paymentUrl;
      } else {
        alert("Không thể tạo yêu cầu thanh toán. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Lỗi khi thực hiện nạp tiền:", error);
      alert("Đã xảy ra lỗi. Vui lòng thử lại.");
    }
  };

  return (
    <div className="top-up-page">
      <h1 className="title">Nạp tiền vào tài khoản</h1>
      <div className="top-up-options">
        {topUpAmounts.map((amount, index) => (
          <div key={index} className="top-up-card">
          <h2>Add {amount.toLocaleString()}</h2>
          <div className="right-section">
            <h3>{amount.toLocaleString()} VND</h3>
            <button className="top-up-button" onClick={() => handleTopUp(amount)}>
              Nạp tiền
            </button>
          </div>
        </div>        
        ))}
      </div>
      <button className="back-button" onClick={() => navigate("/subscription")}>
        Quay lại
      </button>
    </div>
  );
};

export default TopUpPage;
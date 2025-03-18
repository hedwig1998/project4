import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import '../../assest/css/topUpNofi.css';

const TopUpNofi = () => {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <div className="success-content">

        <FaCheckCircle className="success-icon" />

        <h1 className="success-message">Nạp tiền thành công!</h1>
        <p className="success-description">
          Bạn đã nạp tiền thành công vào tài khoản. Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.
        </p>

        <button
          className="back-to-subscription-button"
          onClick={() => navigate('/subscription')}
        >
          Quay lại trang Subscription
        </button>
      </div>
    </div>
  );
};

export default TopUpNofi;
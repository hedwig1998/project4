import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import "../../assest/css/subscriptionPlan.css";

const SubscriptionPlans = () => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showQRCode, setShowQRCode] = useState(false);
  const [userPoints, setUserPoints] = useState(0);
  const [showLoginConfirmation, setShowLoginConfirmation] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showTopUpConfirmation, setShowTopUpConfirmation] = useState(false);
  const [error, setError] = useState("");

  // Lấy danh sách gói tập luyện
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch("http://54.251.220.228:8080/trainingSouls/items");
        const data = await response.json();
        setPlans(data);
      } catch (error) {
        console.error("Failed to fetch plans:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlans();
  }, []);

  // Lấy thông tin người dùng (điểm)
  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await fetch("http://54.251.220.228:8080/trainingSouls/users/getMyInfo", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (data.code === 0 && data.result) {
          setUserPoints(data.result.points || 0);
        }
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  // Xử lý khi người dùng chọn gói
  const handleChoosePlan = (plan) => {
    setSelectedPlan(plan);
    const token = localStorage.getItem("token");

    if (!token) {
      setShowLoginConfirmation(true);
    }
    else if (plan.pointsRequired <= userPoints) {
      setShowConfirmation(true);
    } else {
      setShowTopUpConfirmation(true);
    }
  };

  const handleLoginRequire = () => {
    navigate('/login');
  };

  // Xử lý mua hàng
  const handlePurchase = async () => {
    const token = localStorage.getItem("token");
    // if (!token || !selectedPlan) {
    //   setError("Vui lòng đăng nhập để thực hiện mua hàng.");
    //   return;
    // }

    try {
      const response = await fetch(
        `http://54.251.220.228:8080/trainingSouls/purchase/${selectedPlan.itemId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log("Response Data (JSON):", data);

        if (response.ok && data.code === 0) {
          alert("Mua hàng thành công!");
          setShowConfirmation(false);
          setShowQRCode(false);
          setUserPoints((prevPoints) => prevPoints - selectedPlan.pointsRequired);
        } else {
          setError(data.message || "Mua hàng thất bại. Vui lòng thử lại.");
        }
      } else {
        const text = await response.text();
        console.log("Response Text:", text);

        if (response.ok) {
          alert("Mua hàng thành công!");
          setShowConfirmation(false);
          setShowQRCode(false);
          setUserPoints((prevPoints) => prevPoints - selectedPlan.pointsRequired);
        } else {
          setError("Mua hàng thất bại. Vui lòng thử lại.");
        }
      }
    } catch (error) {
      console.error("Lỗi khi thực hiện mua hàng:", error);
      setError("Đã xảy ra lỗi. Vui lòng thử lại.");
    }
  };

  const handleTopUp = () => {
    navigate("/top-up");
  };

  return (
    <div className="shop">
      <h1 className="title">Choose Your Plan</h1>
      {/* <div className="billing-toggle">
        <button
          className={billingCycle === "monthly" ? "active" : ""}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={billingCycle === "yearly" ? "active" : ""}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly
        </button>
      </div> */}
      <div className="plans-container">
        {isLoading ? (
          <p>Loading plans...</p>
        ) : (
          plans.map((plan) => (
            <div key={plan.itemId} className="plan-card">
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <p>Duration Day: {plan.durationInDays}</p>
              <div className="plan-price">
                Points Required: {plan.pointsRequired}
              </div>
              {/* <div className="plan-quantity">
                Quantity Available: {plan.quantity}
              </div> */}
              <button className="select-plan-button" onClick={() => handleChoosePlan(plan)}>
                Choose Plan
              </button>
            </div>
          ))
        )}
      </div>

      {/* Thông báo xác nhận chưa đăng nhập */}
      {showLoginConfirmation && selectedPlan && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Yêu cầu đăng nhập</h3>
            <p>
              Bạn cần phải đăng nhập để thực hiện thao tác này
            </p>
            <div className="popup-buttons">
              <button className="popup-button confirm" onClick={handleLoginRequire}>Chuyển tới đăng nhập</button>
              <button className="popup-button cancel" onClick={() => setShowLoginConfirmation(false)}>Đóng</button>
            </div>
          </div>
        </div>
      )}

      {/* Thông báo xác nhận mua hàng */}
      {showConfirmation && selectedPlan && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Xác nhận mua hàng</h3>
            <p>
              Hiện tại bạn đang có {userPoints} điểm. Gói này cần {selectedPlan.pointsRequired} điểm. Bạn có muốn tiếp tục mua không?
            </p>
            <div className="popup-buttons">
              <button className="popup-button confirm" onClick={handlePurchase}>Đồng ý</button>
              <button className="popup-button cancel" onClick={() => setShowConfirmation(false)}>Hủy</button>
            </div>
          </div>
        </div>
      )}

      {/* Thông báo nạp tiền */}
      {showTopUpConfirmation && selectedPlan && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Thông báo</h3>
            <p>
              Tài khoản của bạn không đủ để thanh toán. Bạn có muốn nạp thêm không?
            </p>
            <div className="popup-buttons">
              <button className="popup-button confirm" onClick={handleTopUp}>Đồng ý</button>
              <button className="popup-button cancel" onClick={() => setShowTopUpConfirmation(false)}>Hủy</button>
            </div>
          </div>
        </div>
      )}

      {/* Hiển thị lỗi */}
      {error && <p className="error-message">{error}</p>}

      {/* QR Code Modal */}
      {showQRCode && selectedPlan && (
        <div className="qr-code-modal">
          <div className="qr-code-content">
            <button onClick={() => setShowQRCode(false)}>Close</button>
            <h3>Scan QR Code to Pay for {selectedPlan.name}</h3>
            <h4>Points Required: {selectedPlan.pointsRequired}</h4>
            <QRCodeSVG
              value={`https://yourpaymentgateway.com/payment?planId=${selectedPlan.itemId}&points=${selectedPlan.pointsRequired}`}
              size={256}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionPlans;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import "../../assest/css/subscriptionPlan.css";

const SubscriptionPlans = () => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState("monthly"); // Mặc dù không dùng, giữ lại nếu có kế hoạch dùng sau
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
      setIsLoading(true); 
      try {
        const response = await fetch("http://54.251.220.228:8080/trainingSouls/items");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (Array.isArray(data)) {
          const subscriptionPlans = data.filter(
            (plan) => plan.itemType === "SUBSCRIPTION"
          );
          setPlans(subscriptionPlans);
        } else {
          console.error("API did not return an array for items:", data);
          setPlans([]); 
        }

      } catch (error) {
        console.error("Failed to fetch plans:", error);
        setError("Không thể tải danh sách gói. Vui lòng thử lại."); 
        setPlans([]);
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
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.code === 0 && data.result) {
          setUserPoints(data.result.points || 0);
        } else {
          console.error("Failed to parse user info or user info not found:", data.message || "Unknown error");
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
    setShowLoginConfirmation(false);
    navigate('/login');
  };

  // Xử lý mua hàng
  const handlePurchase = async () => {
    const token = localStorage.getItem("token");
    if (!selectedPlan) {
        setError("Vui lòng chọn một gói trước khi mua.");
        return;
    }

    try {
      const response = await fetch(
        `http://54.251.220.228:8080/trainingSouls/purchase/${selectedPlan.itemId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const contentType = response.headers.get("content-type");
      let data;

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
        console.log("Response Data (JSON):", data);
      } else {
        const text = await response.text();
        console.log("Response Text:", text);
        if (!response.ok) {
            setError(text || "Mua hàng thất bại. Phản hồi không phải JSON.");
            setShowConfirmation(false);
            return;
        }
        alert("Mua hàng thành công (phản hồi không phải JSON)!");
        setShowConfirmation(false);
        setShowQRCode(false);
        setUserPoints((prevPoints) => prevPoints - selectedPlan.pointsRequired);
        return;
      }


      if (response.ok && data.code === 0) {
        alert("Mua hàng thành công!");
        setShowConfirmation(false);
        setShowQRCode(false);
        setUserPoints((prevPoints) => prevPoints - selectedPlan.pointsRequired);
      } else {
        setError(data.message || `Mua hàng thất bại (code: ${data.code}). Vui lòng thử lại.`);
      }
    } catch (error) {
      console.error("Lỗi khi thực hiện mua hàng:", error);
      setError("Đã xảy ra lỗi khi kết nối. Vui lòng thử lại.");
    } finally {
    }
  };

  const handleTopUp = () => {
    setShowTopUpConfirmation(false); 
    navigate("/top-up");
  };

  return (
    <div className="shop">
      <h1 className="title">Chọn gói tập luyện</h1>
      {/* <div className="billing-toggle"> ... </div> */}
      <div className="plans-container">
        {isLoading ? (
          <p>Đang tải danh sách gói...</p>
        ) : error ? ( // Hiển thị lỗi nếu có
          <p className="error-message">{error}</p>
        ) : plans.length > 0 ? ( 
          plans.map((plan) => (
            <div key={plan.itemId} className="plan-card">
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <p>Thời gian: {plan.durationInDays} Ngày</p>
              <div className="plan-price">
                Điểm yêu cầu: {plan.pointsRequired}
              </div>
              <button className="select-plan-button" onClick={() => handleChoosePlan(plan)}>
                Chọn
              </button>
            </div>
          ))
        ) : (
          <p>Hiện không có gói tập luyện nào.</p> 
        )}
      </div>

      {/* Thông báo xác nhận chưa đăng nhập */}
      {showLoginConfirmation && selectedPlan && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Yêu cầu đăng nhập</h3>
            <p>
              Bạn cần phải đăng nhập để thực hiện thao tác này.
            </p>
            <div className="popup-buttons">
              <button className="popup-button confirm" onClick={handleLoginRequire}>Chuyển tới đăng nhập</button>
              <button className="popup-button cancel" onClick={() => {setShowLoginConfirmation(false); setSelectedPlan(null);}}>Đóng</button>
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
              Hiện tại bạn đang có {userPoints} điểm. Gói "{selectedPlan.name}" cần {selectedPlan.pointsRequired} điểm. Bạn có muốn tiếp tục mua không?
            </p>
            <div className="popup-buttons">
              <button className="popup-button confirm" onClick={handlePurchase}>Đồng ý</button>
              <button className="popup-button cancel" onClick={() => {setShowConfirmation(false); setSelectedPlan(null);}}>Hủy</button>
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
              Tài khoản của bạn không đủ {selectedPlan.pointsRequired} điểm để mua gói "{selectedPlan.name}". Bạn có muốn nạp thêm không?
            </p>
            <div className="popup-buttons">
              <button className="popup-button confirm" onClick={handleTopUp}>Đồng ý</button>
              <button className="popup-button cancel" onClick={() => {setShowTopUpConfirmation(false); setSelectedPlan(null);}}>Hủy</button>
            </div>
          </div>
        </div>
      )}

      {error && !isLoading && plans.length > 0 && <p className="error-message" style={{textAlign: 'center', marginTop: '20px'}}>{error}</p>}


      {showQRCode && selectedPlan && (
        <div className="qr-code-modal">
          <div className="qr-code-content">
            <button onClick={() => {setShowQRCode(false); setSelectedPlan(null);}}>Đóng</button>
            <h3>Scan QR Code để thanh toán cho {selectedPlan.name}</h3>
            <h4>Điểm yêu cầu: {selectedPlan.pointsRequired}</h4>
            <QRCodeSVG
              value={`https://yourpaymentgateway.com/payment?planId=${selectedPlan.itemId}&points=${selectedPlan.pointsRequired}`} // Thay thế bằng URL thật
              size={256}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionPlans;
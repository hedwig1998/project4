import React from 'react';
import { Link } from 'react-router-dom';

const ProgramSection = () => {
  return (
    <div
      className="container-fluid programe position-relative px-5 mt-5"
      style={{ marginBottom: '135px' }}
    >
      <div className="row g-5">
        {/* Card 1 */}
        <div className="col-lg-4 col-md-6">
          <div className="bg-light rounded text-center p-5 h-100 d-flex flex-column">
            <div>
              <i className="flaticon-six-pack display-1 text-primary"></i>
              <h3 className="text-uppercase my-4">Xây dựng cơ thể</h3>
              <p>
                Giải phóng tiềm năng của bạn và tạo nên vóc dáng lý tưởng của bạn.
                Các chương trình thể hình của chúng tôi tập trung vào việc phát triển khối lượng cơ ấn tượng, sự cân đối và đường nét sắc nét
                thông qua chương trình đào tạo có mục tiêu và hướng dẫn dinh dưỡng chuyên gia.
              </p>
            </div>
            <Link className="text-uppercase mt-auto" to={"/blog"}> 
              Đọc Thêm <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-lg-4 col-md-6">
          <div className="bg-light rounded text-center p-5 h-100 d-flex flex-column">
            <div>
              <i className="flaticon-barbell display-1 text-primary"></i>
              <h3 className="text-uppercase my-4">Nâng tạ</h3>
              <p>
                Làm chủ nghệ thuật và khoa học nâng tạ để xây dựng sức mạnh, sức mạnh và sự tự tin cơ bản.
                Chúng tôi nhấn mạnh vào hình thức đúng và quá tải tiến bộ để có kết quả an toàn, có tác động,
                cho dù bạn là người mới bắt đầu hay người nâng tạ có kinh nghiệm.
              </p>
            </div>
            <Link className="text-uppercase mt-auto" to={"/blog"}> 
              Đọc Thêm <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-lg-4 col-md-6">
          <div className="bg-light rounded text-center p-5 h-100 d-flex flex-column"> 
            <div>
              <i className="flaticon-bodybuilding display-1 text-primary"></i>
              <h3 className="text-uppercase my-4">Xây dựng cơ bắp</h3>
              <p>
                Dành riêng để tăng kích thước và khối lượng cơ? Các chiến lược xây dựng cơ bắp của chúng tôi
                kết hợp các kỹ thuật phì đại đã được chứng minh, các bài tập chia nhỏ tối ưu,
                và các giao thức phục hồi thông minh để giúp bạn tăng khối lượng nạc một cách hiệu quả và bền vững.
              </p>
            </div>
            <Link className="text-uppercase mt-auto" to={"/blog"}>
              Đọc thêm <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>

  
        {/* <div className="col-lg-12 col-md-6 text-center">
          <h1 className="text-uppercase text-light mb-4">30% Discount For This Summer</h1>
          <Link to={"/login"} className="btn btn-primary py-3 px-5">
            Become A Member
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default ProgramSection;
import React from 'react';

const AboutSection = () => {
  return (
    <div className="container-fluid p-5">
      <div className="row gx-5">
        <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: '500px' }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100 rounded"
              src="img/about.jpg"
              alt="About Us"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="mb-4">
            {/* <h5 className="text-primary text-uppercase">Về Chúng Tôi</h5> */}
            <h1 className="display-3 text-uppercase mb-0">Chào mừng đến với Training Souls</h1>
          </div>
          <h4 className="text-body mb-4">
            Tại Training Souls, chúng tôi không chỉ là một phòng tập thể dục; chúng tôi là một cộng đồng năng động tận tụy trao quyền cho bạn trên hành trình rèn luyện thể chất độc đáo của mình. 
            Chúng tôi tin rằng việc đạt được mục tiêu sức khỏe của bạn phải là một trải nghiệm truyền cảm hứng và thú vị. 
            Sứ mệnh của chúng tôi là cung cấp một môi trường hỗ trợ, động viên và hiện đại, nơi mọi người, từ người mới bắt đầu đến vận động viên dày dạn kinh nghiệm, có thể phát triển, vượt qua giới hạn của mình và khám phá sức mạnh của họ. 
            Hãy tham gia cùng chúng tôi và trở thành một phần của gia đình luôn tôn vinh từng bước tiến bộ của bạn.
          </h4>
          <div className="rounded bg-dark p-5">
            <ul className="nav nav-pills justify-content-between mb-3">
              <li className="nav-item w-50">
                <a
                  className="nav-link text-uppercase text-center w-100 active"
                  data-bs-toggle="pill"
                  href="#pills-1"
                >
                  Về chúng tôi
                </a>
              </li>
              <li className="nav-item w-50">
                <a
                  className="nav-link text-uppercase text-center w-100"
                  data-bs-toggle="pill"
                  href="#pills-2"
                >
                  Tại sao chọn chúng tôi?
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="pills-1">
                <p className="text-secondary mb-0">
                  Chúng tôi là đối tác của bạn về sức khỏe và thể hình, cam kết cung cấp trải nghiệm phòng tập đặc biệt. 
                  Tại Training Souls, chúng tôi tập trung vào việc tạo ra bầu không khí tích cực và hướng đến kết quả, nơi bạn có thể đạt được thành tích cá nhân tốt nhất. 
                  Chúng tôi cung cấp thiết bị chất lượng hàng đầu, huấn luyện viên chuyên gia và môi trường thúc đẩy được thiết kế để giúp bạn thành công, bất kể trình độ thể lực hiện tại của bạn. 
                  Hãy bắt đầu hành trình đến với một bạn khỏe mạnh và mạnh mẽ hơn cùng chúng tôi ngay hôm nay.
                </p>
              </div>
              <div className="tab-pane fade" id="pills-2">
                <p className="text-secondary mb-0">
                  Tập luyện trên thiết bị thể dục mới nhất và hiệu quả nhất trong không gian sạch sẽ, hiện đại và tràn đầy năng lượng.
                  Các huấn luyện viên giàu kinh nghiệm của chúng tôi cung cấp hỗ trợ và hướng dẫn được cá nhân hóa để đảm bảo bạn tập luyện thông minh và thấy được kết quả.
                  Tận hưởng nhiều lớp thể dục nhóm và chương trình đào tạo phù hợp với sở thích và khả năng khác nhau.
                  Chúng tôi tận tâm giúp bạn đạt được kết quả thể dục hữu hình và xây dựng thói quen lành mạnh bền vững.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

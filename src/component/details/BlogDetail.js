import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetail = () => {
  const { postId } = useParams(); // Lấy id từ URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Hàm lấy videoId từ URL YouTube
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Component để hiển thị video YouTube
  const YouTubeVideo = ({ videoUrl }) => {
    const videoId = getYouTubeVideoId(videoUrl);
    if (!videoId) {
      return <p>URL video YouTube không hợp lệ.</p>;
    }
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  // Gọi API để lấy dữ liệu bài đăng
  useEffect(() => {
    fetch(`http://localhost:8080/trainingSouls/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching post details:', error);
        setLoading(false);
      });
  }, [postId]);

  // Hiển thị loading nếu đang tải dữ liệu
  if (loading) {
    return <div>Loading...</div>;
  }

  // Hiển thị thông báo nếu không tìm thấy bài đăng
  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div className="container-fluid p-5">
      <div className="row g-5">
        <div className="col-lg-8">
          {/* Blog Detail Start */}
          <div className="container-fluid p-5">
            <div className="row">
              <div>
                {/* Tiêu đề và thông tin ngày đăng, người đăng */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h1 className="mb-0">{post.title}</h1>
                  <p className="text-secondary mb-0">
                    Đăng ngày: {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <p className="text-secondary mb-4">Người đăng: {post.name}</p>

                {/* Hiển thị ảnh, video và nội dung theo thứ tự */}
                {post.imgUrl.map((img, index) => (
                  <React.Fragment key={index}>
                    {/* Hiển thị ảnh */}
                    <img
                      src={img}
                      alt={`Ảnh ${index + 1}`}
                      className="img-fluid rounded mb-4"
                      style={{width: "100%"}}
                    />

                    {/* Hiển thị video nếu có */}
                    {post.videoUrl[index] && (
                      <div className="mb-4">
                        <YouTubeVideo videoUrl={post.videoUrl[index]} />
                      </div>
                    )}

                    {/* Hiển thị nội dung nếu có */}
                    {post.content[index] && (
                      <div className="t p-4 rounded mb-4">
                        <p style={{ whiteSpace: 'pre-line', color: "black" }}>{post.content[index]}</p>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          {/* Blog Detail End */}

          {/* Comment List Start */}
          <div className="mb-5">
            <h3 className="text-uppercase mb-4">3 Comments</h3>
            {[1, 2, 3].map((_, index) => (
              <div className="d-flex mb-4" key={index}>
                <img
                  src="img/user.jpg"
                  className="img-fluid rounded"
                  style={{ width: "45px", height: "45px" }}
                  alt="User"
                />
                <div className="ps-3">
                  <h6>
                    <Link to="#">John Doe</Link> <small><i>01 Jan 2045</i></small>
                  </h6>
                  <p>
                    Diam amet duo labore stet elitr invidunt ea clita ipsum
                    voluptua...
                  </p>
                  <button className="btn btn-sm btn-secondary">Reply</button>
                </div>
              </div>
            ))}
          </div>
          {/* Comment List End */}

          {/* Comment Form Start */}
          <div className="bg-dark rounded p-5">
            <h3 className="text-light text-uppercase mb-4">Leave a comment</h3>
            <form>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-white border-0"
                    placeholder="Your Name"
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="email"
                    className="form-control bg-white border-0"
                    placeholder="Your Email"
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control bg-white border-0"
                    rows="5"
                    placeholder="Comment"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Leave Your Comment
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* Comment Form End */}
        </div>

        {/* Sidebar Start */}
        <Sidebar />
        {/* Sidebar End */}
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="col-lg-4">
      {/* Search Form Start */}
      <div className="mb-5">
        <div className="input-group">
          <input
            type="text"
            className="form-control p-3"
            placeholder="Keyword"
          />
          <button className="btn btn-primary px-4">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
      {/* Search Form End */}

      {/* Category Start */}
      <div className="mb-5">
        <h3 className="text-uppercase mb-4">Categories</h3>
        <div className="d-flex flex-column justify-content-start bg-dark rounded p-4">
          {["Web Design", "Web Development", "Keyword Research", "Email Marketing"].map(
            (category, index) => (
              <Link
                key={index}
                className="fs-5 fw-bold text-light text-uppercase mb-2"
                to={`/category/${category}`}
              >
                <i className="bi bi-arrow-right text-primary me-2"></i>
                {category}
              </Link>
            )
          )}
        </div>
      </div>
      {/* Category End */}
    </div>
  );
};

export default BlogDetail;
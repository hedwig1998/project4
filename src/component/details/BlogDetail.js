import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Sidebar = ({ posts }) => {
    if (!posts || !Array.isArray(posts)) {
      return (
        <div className="col-lg-4">
          {/* Recent Post Start */}
          <div className="mb-5">
            <h3 className="text-uppercase mb-4">Recent Post</h3>
            <div className="bg-dark rounded p-4">
              <p className="text-light">Đang tải bài viết gần đây...</p>
            </div>
          </div>
          {/* ... các phần khác của Sidebar ... */}
        </div>
      );
    }

  return (
    <div className="col-lg-4">
      {/* Recent Post Start */}
        <div className="mb-5">
          <h3 className="text-uppercase mb-4">Recent Post</h3>
          <div className="bg-dark rounded p-4">
            {posts.slice(0, 5).map((post) => ( 
              <div className="d-flex overflow-hidden mb-3" key={post.id}> 
                <img
                  className="img-fluid flex-shrink-0 rounded-start"
                  src={post.imgUrl && post.imgUrl.length > 0 ? post.imgUrl[0] : 'https://via.placeholder.com/75?text=No+Image'}
                  style={{ width: '75px', height: '75px', objectFit: 'cover'}} 
                  alt={post.title || 'Recent Post'}
                />
                <Link
                  to={`/detail/${post.id}`}
                  className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0 text-truncate" // Thêm text-truncate nếu tiêu đề quá dài
                  style={{width: "calc(100% - 75px)", height: "75px", textDecoration: 'none', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}} // Style để giới hạn 2 dòng
                  title={post.title} 
                >
                  {post.title || 'Untitled Post'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      {/* Recent Post End */}

      {/* Search Form Start */}
      {/* <div className="mb-5">
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
      </div> */}
      {/* Search Form End */}

      {/* Category Start */}
      <div className="mb-5">
        <h3 className="text-uppercase mb-4">Categories</h3>
        <div className="d-flex flex-column justify-content-start bg-dark rounded p-4">
          {/* Ví dụ về categories - bạn có thể fetch hoặc định nghĩa chúng */}
          {["Fitness", "Nutrition", "Workout Plans", "Motivation"].map(
            (category, index) => (
              <Link
                key={index}
                className="fs-5 fw-bold text-light text-uppercase mb-2"
                to={`/category/${category.toLowerCase().replace(' ', '-')}`} // Tạo link thân thiện
                style={{ textDecoration: 'none' }}
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


const BlogDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loadingPost, setLoadingPost] = useState(true); 
  const [loadingRecent, setLoadingRecent] = useState(true); 
  const [recentPosts, setRecentPosts] = useState([]);
  const [error, setError] = useState(null); 


  // useEffect riêng cho việc fetch bài viết gần đây
  useEffect(() => {
      setLoadingRecent(true); // Bắt đầu fetch recent posts
      fetch('http://54.251.220.228:8080/trainingSouls/posts/getAllPost')
        .then((response) => {
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          return response.json();
        })
        .then((data) => {
           if (Array.isArray(data)) {
             const sortedPosts = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
             // Lọc ra bài viết hiện tại khỏi danh sách bài viết gần đây (nếu cần)
             const filteredRecentPosts = sortedPosts.filter(p => p.id !== postId); // postId từ useParams là string, data.id có thể là number -> cần chuyển đổi nếu cần hoặc so sánh ==
             const fiveRecentPosts = filteredRecentPosts.slice(0, 5);
             setRecentPosts(fiveRecentPosts);
           } else {
             console.error("Expected an array for recent posts, but got:", data);
             setRecentPosts([]); // Đặt là mảng rỗng nếu dữ liệu không hợp lệ
           }
           setLoadingRecent(false);
        })
        .catch((error) => {
            console.error('Error fetching recent posts:', error);
            setError(`Could not load recent posts: ${error.message}`); 
            setLoadingRecent(false);
            setRecentPosts([]); 
          });
    }, [postId]);

  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const YouTubeVideo = ({ videoUrl }) => {
    const videoId = getYouTubeVideoId(videoUrl);
    if (!videoId) {
       
       return null;
    }
    return (
      <div className="embed-responsive embed-responsive-16by9 mb-4"> {/* Thêm mb-4 ở đây */}
        <iframe
          className="embed-responsive-item"
          style={{ width: '100%', height: '400px' }}
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  useEffect(() => {
    setLoadingPost(true); 
    setError(null); 
    fetch(`http://54.251.220.228:8080/trainingSouls/posts/${postId}`)
      .then((response) => {
          if (!response.ok) {
             if (response.status === 404) {
                 throw new Error('Post not found!');
             }
             throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
       })
      .then((data) => {
        if (data && typeof data === 'object' && data.id) {
           setPost(data);
        } else {
           console.error("Invalid post data structure received:", data);
           throw new Error('Invalid post data received.');
        }
        setLoadingPost(false);
      })
      .catch((error) => {
        console.error('Error fetching post details:', error);
        setError(error.message); 
        setLoadingPost(false);
        setPost(null); 
      });
  }, [postId]); 


   if (loadingPost) {
    return <div className="container p-5 text-center">Loading post details...</div>;
   }

   if (error) {
       return <div className="container p-5 text-center text-danger">Error: {error}</div>;
   }

   if (!post && !loadingPost) {
     return <div className="container p-5 text-center">Post not found!</div>;
   }

  return (
    post && (
      <div className="container-fluid p-5">
        <div className="row g-5">
          <div className="col-lg-8">
            {/* Blog Detail Start */}
            <div className="mb-5"> {/* Thay container-fluid và p-5 bằng mb-5 */}
                {/* Tiêu đề và thông tin ngày đăng, người đăng */}
                <div className="mb-4">
                   {/* <p className="text-secondary mb-2">
                     Posted on: {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'N/A'} by {post.name || 'Unknown Author'}
                   </p> */}
                    <h1 className="display-5 text-uppercase mb-0">{post.title || 'Untitled Post'}</h1>
                </div>
                <div className="d-flex mb-2">
                    <p className="text-secondary text-uppercase mb-2">By {post.name}</p>
                    <span className="text-primary px-2">|</span>
                    <p className="text-secondary text-uppercase mb-2">{post.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'N/A'}</p>
                </div>


              
                {Array.isArray(post.imgUrl) && post.imgUrl.map((img, index) => (
                  <React.Fragment key={`content-block-${index}`}>
                    {img && ( // Chỉ hiển thị nếu có ảnh
                        <img
                          src={img}
                          alt={`Image ${index + 1} for ${post.title}`}
                          className="img-fluid rounded mb-4 w-100" // Thêm w-100
                        />
                    )}

                   
                    {Array.isArray(post.videoUrl) && post.videoUrl[index] && (
                       <YouTubeVideo videoUrl={post.videoUrl[index]} />
                    )}

                    {Array.isArray(post.content) && post.content[index] && (
                      <div className="bg-light p-4 rounded mb-4">

                        <p style={{ whiteSpace: 'pre-line', color: "black", fontSize: '1.1rem', lineHeight: '1.6' }}>
                          {post.content[index]}
                        </p>
                      </div>
                    )}
                  </React.Fragment>
                ))}
            </div>
            {/* Blog Detail End */}

            {/* Comment Section (giữ nguyên hoặc thay đổi nếu cần) */}
            {/* ... */}
          </div>

          {/* Sidebar Start */}
           {/* Truyền recentPosts (và trạng thái loading của nó nếu cần) vào Sidebar */}
          <Sidebar posts={recentPosts} />
          {/* Sidebar End */}
        </div>
      </div>
    )
  );
};

export default BlogDetail;
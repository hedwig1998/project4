import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    setIsLoading(true); 
    setError(null); 

    fetch('http://54.251.220.228:8080/trainingSouls/posts/getAllPost')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          const sortedPosts = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          const threeLatestPosts = sortedPosts.slice(0, 3);
          setLatestPosts(threeLatestPosts);
        } else {
          console.error('Error fetching data: Expected an array but received', data);
          setError('Dữ liệu nhận được không phải là một danh sách.');
          setLatestPosts([]);
        }
        setIsLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(`Không thể tải dữ liệu blog: ${error.message}`);
        setIsLoading(false); 
        setLatestPosts([]); 
      });
  }, []);

  if (isLoading) {
    return (
      <div className="container-fluid p-5 text-center">
        <p>Đang tải bài viết...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-fluid p-5 text-center">
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  if (latestPosts.length === 0 && !isLoading) {
    return (
      <div className="container-fluid p-5 text-center">
        <h5 className="text-primary text-uppercase">Our Blog</h5>
        <h1 className="display-3 text-uppercase mb-0">Latest Blog Post</h1>
        <p className="mt-4">Không có bài viết nào để hiển thị.</p>
      </div>
    );
  }

  return (
    <div className="container-fluid p-5">
      <div className="mb-5 text-center">
        <h5 className="text-primary text-uppercase">Our Blog</h5>
        <h1 className="display-3 text-uppercase mb-0">Latest Blog Post</h1>
      </div>
      <div className="row g-5">
        {latestPosts.map((post) => (
          <div className="col-md-4" key={post.id}> 
            <div className="blog-item">
              <div className="position-relative overflow-hidden rounded-top" style={{ width: "100%", height: "450px", margin: "0 auto"}}>
                <img
                  className="img-fluid blog-images"
                  src={post.imgUrl && post.imgUrl.length > 0 ? post.imgUrl[0] : 'https://via.placeholder.com/600x450?text=No+Image'}
                  alt={post.title || 'Blog post image'}
                  style={{width: "100%", height: "100%", objectFit: "cover"}}
                />
              </div>
              <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                  {post.createdAt && (
                    <>
                      <span>{new Date(post.createdAt).getDate()}</span>
                      <h6 className="text-light text-uppercase mb-0">{new Date(post.createdAt).toLocaleString('default', { month: 'long' })}</h6>
                      <span>{new Date(post.createdAt).getFullYear()}</span>
                    </>
                  )}
                </div>
                <Link className="h5 text-uppercase text-light" to={`/detail/${post.id}`}>
                  {post.title || 'Untitled Post'}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogMain = () => {
  const [posts, setPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);

  // API hiển thị danh sách bài viết
  useEffect(() => {
    fetch('http://localhost:8080/trainingSouls/posts/getAllPost')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // API hiển thị 5 bài viết gần nhất trong mục recent post
  useEffect(() => {
    fetch('http://localhost:8080/trainingSouls/posts/getAllPost')
      .then((response) => response.json())
      .then((data) => {
        const sortedPosts = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        const recentPosts = sortedPosts.slice(0, 5);
        setRecentPosts(recentPosts);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container-fluid p-5">
      <div className="row g-5">
        {/* Blog list Start */}
        <div className="col-lg-8">
          <div className="row g-5">
            {posts.map((post, index) => (
              <div className="col-md-6" key={post.id}>
                <div className="blog-item">
                  <div className="position-relative overflow-hidden rounded-top" style={{ width: "100%", height: "450px", margin: "0 auto"}}>
                    <img className="img-fluid blog-images" src={post.imgUrl[0]} alt={post.title} style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                  </div>
                  <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                    <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                      <span>{new Date(post.createdAt).getDate()}</span>
                      <h6 className="text-light text-uppercase mb-0">{new Date(post.createdAt).toLocaleString('default', { month: 'long' })}</h6>
                      <span>{new Date(post.createdAt).getFullYear()}</span>
                    </div>
                    <Link className="h5 text-uppercase text-light" to={`/detail/${post.id}`}>
                      {post.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-12">
              <nav aria-label="Page navigation">
                <ul className="pagination pagination-lg justify-content-center m-0">
                  <li className="page-item disabled">
                    <Link className="page-link" to="#" aria-label="Previous">
                      <span aria-hidden="true"><i className="bi bi-arrow-left"></i></span>
                    </Link>
                  </li>
                  {[1, 2, 3].map((page) => (
                    <li className={`page-item ${page === 1 ? 'active' : ''}`} key={page}>
                      <Link className="page-link" to="/detail">{page}</Link>
                    </li>
                  ))}
                  <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Next">
                      <span aria-hidden="true"><i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* Blog list End */}

        {/* Sidebar Start */}
        <div className="col-lg-4">
          {/* Search Form Start */}
          <div className="mb-5">
            <div className="input-group">
              <input type="text" className="form-control p-3" placeholder="Keyword" />
              <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
            </div>
          </div>
          {/* Search Form End */}

          {/* Category Start */}
          <div className="mb-5">
            <h3 className="text-uppercase mb-4">Categories</h3>
            <div className="d-flex flex-column justify-content-start bg-dark rounded p-4">
              {["Web Design", "Web Development", "Keyword Research", "Email Marketing"].map((category, index) => (
                <Link
                  className="fs-5 fw-bold text-light text-uppercase mb-2"
                  to="#"
                  key={index}
                >
                  <i className="bi bi-arrow-right text-primary me-2"></i>
                  {category}
                </Link>
              ))}
            </div>
          </div>
          {/* Category End */}

          {/* Recent Post Start */}
          <div className="mb-5">
            <h3 className="text-uppercase mb-4">Recent Post</h3>
            <div className="bg-dark rounded p-4">
              {recentPosts.slice(0, 5).map((post, index) => (
                <div className="d-flex overflow-hidden mb-3" key={index}>
                  <img
                    className="img-fluid flex-shrink-0 rounded-start"
                    src={post.imgUrl[0]}
                    style={{ width: '75px', height: 'fitContent', objectFit: 'cover'}}
                    alt={post.title}
                  />
                  <Link to={`/detail/${post.id}`} className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                  style={{width: "100%", height: "85px"}}>
                    {post.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* Recent Post End */}

          {/* Tags Start */}
          <div className="mb-5">
            <h3 className="text-uppercase mb-4">Tag Cloud</h3>
            <div className="d-flex flex-wrap m-n1">
              {["Design", "Development", "Marketing", "SEO", "Writing", "Consulting"].map((tag, index) => (
                <Link to="" className="btn btn-dark m-1" key={index}>{tag}</Link>
              ))}
            </div>
          </div>
          {/* Tags End */}

          {/* Plain Text Start */}
          <div>
            <h3 className="text-uppercase mb-4">Plain Text</h3>
            <div className="bg-dark rounded text-center text-light" style={{ padding: '30px' }}>
              <p>
                Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit
                amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna
                takimata, amet sit et diam dolor ipsum amet diam
              </p>
              <Link to="" className="btn btn-primary py-2 px-4">Read More</Link>
            </div>
          </div>
          {/* Plain Text End */}
        </div>
        {/* Sidebar End */}
      </div>
    </div>
  );
};

export default BlogMain;

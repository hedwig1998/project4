import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogMain = () => {
  const [posts, setPosts] = useState([]); 
  const [filteredPosts, setFilteredPosts] = useState([]); 
  const [recentPosts, setRecentPosts] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState(''); 
  const [sortOrder, setSortOrder] = useState('newest'); 
  const postsPerPage = 8; 

  // API hiển thị danh sách bài viết
  useEffect(() => {
    fetch('http://localhost:8080/trainingSouls/posts/getAllPost')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setFilteredPosts(data); 
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);


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


  const handleSearch = () => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setFilteredPosts(filtered);
    setCurrentPage(1);
  };


  const handleSort = (order) => {
    setSortOrder(order);
    const sorted = [...filteredPosts].sort((a, b) =>
      order === 'newest'
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : new Date(a.createdAt) - new Date(b.createdAt)
    );
    setFilteredPosts(sorted);
  };

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-fluid p-5">
      <div className="row g-5">
        {/* Blog list Start */}
        <div className="col-lg-8">
          {/* Search Form Start */}
          <div className="mb-5">
            <div className="input-group">
              <input
                type="text"
                className="form-control p-3"
                placeholder="Keyword"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()} // Tìm kiếm khi nhấn Enter
              />
              <button className="btn btn-primary px-4" onClick={handleSearch}>
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
          {/* Search Form End */}

          {/* Sort Buttons Start */}
          <div className="mb-5">
            <button
              className={`btn btn-${sortOrder === 'newest' ? 'primary' : 'secondary'} me-2`}
              onClick={() => handleSort('newest')}
            >
              Mới nhất
            </button>
            <button
              className={`btn btn-${sortOrder === 'oldest' ? 'primary' : 'secondary'}`}
              onClick={() => handleSort('oldest')}
            >
              Cũ nhất
            </button>
          </div>
          {/* Sort Buttons End */}

          {/* Blog List Start */}
          <div className="row g-5">
            {currentPosts.map((post, index) => (
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
            {/* Hiển thị phân trang chỉ khi có nhiều hơn 1 trang */}
            {totalPages > 1 && (
              <div className="col-12">
                <nav aria-label="Page navigation">
                  <ul className="pagination pagination-lg justify-content-center m-0">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                      <Link className="page-link" to="#" aria-label="Previous" onClick={() => handlePageChange(currentPage - 1)}>
                        <span aria-hidden="true"><i className="bi bi-arrow-left"></i></span>
                      </Link>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index + 1}>
                        <Link className="page-link" to="#" onClick={() => handlePageChange(index + 1)}>{index + 1}</Link>
                      </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                      <Link className="page-link" to="#" aria-label="Next" onClick={() => handlePageChange(currentPage + 1)}>
                        <span aria-hidden="true"><i className="bi bi-arrow-right"></i></span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
          {/* Blog List End */}
        </div>
        {/* Blog list End */}

        {/* Sidebar Start */}
        <div className="col-lg-4">
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
        </div>
        {/* Sidebar End */}
      </div>
    </div>
  );
};

export default BlogMain;
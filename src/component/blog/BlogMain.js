import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Giả sử bạn có file CSS riêng cho BlogMain hoặc dùng chung
// import './BlogMain.css'; 

const BlogMain = () => {
  const [posts, setPosts] = useState([]); 
  const [filteredPosts, setFilteredPosts] = useState([]); 
  // Bỏ state recentPosts, thay bằng randomPosts
  // const [recentPosts, setRecentPosts] = useState([]); 
  const [randomPosts, setRandomPosts] = useState([]); // State mới cho bài viết ngẫu nhiên
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('newest'); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const postsPerPage = 8;

  // Hàm để lấy 5 bài viết ngẫu nhiên từ một mảng
  const getRandomPosts = (allPosts, count = 5) => {
    if (!allPosts || allPosts.length === 0) {
      return [];
    }
    const shuffled = [...allPosts].sort(() => 0.5 - Math.random()); // Xáo trộn mảng
    return shuffled.slice(0, Math.min(count, allPosts.length)); // Lấy 'count' phần tử đầu hoặc ít hơn nếu mảng không đủ dài
  };

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
          // Sắp xếp theo ngày tạo (mới nhất trước) cho hiển thị chính
          const sortedDataByDate = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

          setPosts(sortedDataByDate); 
          setFilteredPosts(sortedDataByDate); 
          // setRecentPosts(sortedDataByDate.slice(0, 5)); // Bỏ dòng này

          // Lấy 5 bài viết ngẫu nhiên
          setRandomPosts(getRandomPosts(data, 5)); // Lấy ngẫu nhiên từ data gốc (chưa sort theo ngày) hoặc sortedDataByDate đều được
                                                  // Nếu muốn ngẫu nhiên từ tất cả bài, dùng data. Nếu muốn ngẫu nhiên từ các bài đã sắp xếp theo ngày, dùng sortedDataByDate.
                                                  // Ở đây, tôi dùng `data` để đảm bảo tính ngẫu nhiên trên toàn bộ tập dữ liệu.

        } else {
           console.error("Expected an array but received:", data);
           throw new Error("Invalid data format received from server.");
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(`Could not load posts: ${error.message}`);
        setIsLoading(false);
        setPosts([]); 
        setFilteredPosts([]);
        // setRecentPosts([]); // Bỏ dòng này
        setRandomPosts([]); // Đặt lại state khi có lỗi
      });
  }, []); 

  const handleSearch = (keyword) => {
    setCurrentPage(1); 
    const lowerCaseKeyword = keyword.toLowerCase();
 
    let results = posts.filter(post =>
      post.title.toLowerCase().includes(lowerCaseKeyword)
    );
    
    if (sortOrder === 'oldest') {
      results = results.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (sortOrder === 'newest') { // Đảm bảo sắp xếp lại theo 'newest' nếu đang là 'newest'
      results = results.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
    }


    setFilteredPosts(results);
  };

 const handleInputChange = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
 };

 const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchKeyword);
    }
 };

 const handleSearchClick = () => {
    handleSearch(searchKeyword);
 }

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
    if (pageNumber >= 1 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }
  };


  if (isLoading) {
    return <div className="container-fluid p-5 text-center">Đang tải bài viết...</div>;
  }

  if (error) {
    return <div className="container-fluid p-5 text-center text-danger">Lỗi: {error}</div>;
  }

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
                placeholder="Tìm kiếm theo tiêu đề..."
                value={searchKeyword}
                onChange={handleInputChange} 
                onKeyPress={handleKeyPress} 
              />
              <button className="btn btn-primary px-4" onClick={handleSearchClick}> 
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
          {/* Search Form End */}

          {/* Sort Buttons Start */}
          <div className="mb-3 d-flex justify-content-end"> 
            <span className="me-2 align-self-center">Sắp xếp theo:</span>
            <button
              className={`btn btn-sm btn-${sortOrder === 'newest' ? 'primary' : 'outline-secondary'} me-2`} 
              onClick={() => handleSort('newest')}
              disabled={sortOrder === 'newest'} 
            >
              Mới nhất
            </button>
            <button
              className={`btn btn-sm btn-${sortOrder === 'oldest' ? 'primary' : 'outline-secondary'}`}
              onClick={() => handleSort('oldest')}
              disabled={sortOrder === 'oldest'} 
            >
              Cũ nhất
            </button>
          </div>
          {/* Sort Buttons End */}

          {/* Blog List Start */}
          <div className="row g-5">
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => ( 
                <div className="col-md-6" key={post.id}>
                  <div className="blog-item d-flex flex-column h-100">
                    <div className="position-relative overflow-hidden rounded-top" style={{ width: "100%", height: "300px" }}>
                      <img
                        className="img-fluid blog-images"
                        src={post.imgUrl && post.imgUrl.length > 0 ? post.imgUrl[0] : 'https://via.placeholder.com/600x300?text=No+Image'}
                        alt={post.title || 'Blog post image'}
                        style={{width: "100%", height: "100%", objectFit: "cover"}}
                        loading="lazy" 
                      />
                    </div>
                    <div className="bg-dark d-flex align-items-center rounded-bottom p-4 flex-grow-1">
                      <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                         {post.createdAt ? (
                           <>
                            <span>{new Date(post.createdAt).getDate()}</span>
                            <h6 className="text-light text-uppercase mb-0">{new Date(post.createdAt).toLocaleString('vi-VN', { month: 'short' })}</h6>
                            <span>{new Date(post.createdAt).getFullYear()}</span>
                           </>
                         ) : (
                            <span>N/A</span>
                         )}
                      </div>
                      <Link
                        className="h5 text-uppercase text-light text-decoration-none" 
                        to={`/detail/${post.id}`}
                        style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}
                        title={post.title} 
                      >
                        {post.title || 'Untitled Post'}
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                 <p>Không tìm thấy bài viết nào phù hợp.</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="col-12 mt-4"> 
                <nav aria-label="Page navigation">
                  <ul className="pagination pagination-lg justify-content-center m-0">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                      <button className="page-link" aria-label="Previous" onClick={() => handlePageChange(currentPage - 1)}>
                         <span aria-hidden="true">«</span> 
                      </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index + 1}>
                        <button className="page-link" onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                      </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                      <button className="page-link" aria-label="Next" onClick={() => handlePageChange(currentPage + 1)}>
                         <span aria-hidden="true">»</span> 
                      </button>
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
          {/* Random Post Start */} 
          <div className="mb-5">
            <h3 className="text-uppercase mb-4">Bài viết ngẫu nhiên</h3> 
            <div className="bg-dark rounded p-4">
              {randomPosts.length > 0 ? (
                 randomPosts.map((post) => ( 
                 <div className="d-flex overflow-hidden mb-3" key={`random-${post.id}`}> 
                   <img
                     className="img-fluid flex-shrink-0 rounded-start"
                     src={post.imgUrl && post.imgUrl.length > 0 ? post.imgUrl[0] : 'https://via.placeholder.com/75?text=No+Image'}
                     style={{ width: '75px', height: '75px', objectFit: 'cover'}}
                     alt={post.title || 'Random post'}
                     loading="lazy"
                   />
                   <Link to={`/detail/${post.id}`}
                     className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0 text-truncate text-decoration-none"
                     style={{width: "calc(100% - 75px)", height: "75px", display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}
                     title={post.title}
                    >
                     {post.title || 'Untitled Post'}
                   </Link>
                 </div>
               ))
              ) : (
                  <p className="text-light">Không có bài viết nào để hiển thị ngẫu nhiên.</p>
              )}
            </div>
          </div>
          {/* Random Post End */}
        </div>
        {/* Sidebar End */}
      </div>
    </div>
  );
};

export default BlogMain;
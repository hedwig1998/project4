import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './component/common/Header';
import Footer from './component/common/Footer';
import ScrollToTop from './component/common/ScrollToTop';
import Home from './page/Home';
import Blog from './page/Blog';
import About from './page/About';
import Classes from './page/Classes';
import Trainers from './page/Trainers';
import Contacts from './page/Contacts';
import Detail from './page/Detail';
import Login from './page/Login';
import Rank from './page/Rank';
import Signup from './page/Signup';
import Subscription from './page/Subscription';
import User from './page/User';
import TopUpPage from './component/topup/TopUpPage';
import TopUpNofi from './component/topup/TopUpNofi';

import './App.css'; 

const AppLayout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooterRoutes = ['/login', '/signup'];
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  if (shouldHideHeaderFooter) {
    return <div className="full-page-content">{children}</div>; 
  }

  return (
    <div className="app-container-sticky-footer"> 
      <Header />
      <main className="main-content-sticky-footer"> 
        {children}
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<AppLayout><Login /></AppLayout>} />
        <Route path="/signup" element={<AppLayout><Signup /></AppLayout>} />


        <Route
          path="/*" 
          element={
            <AppLayout>
              <Routes> 
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/class" element={<Classes />} />
                <Route path="/trainer" element={<Trainers />} />
                <Route path="/contact" element={<Contacts />} />
                <Route path="/rank" element={<Rank />} />
                <Route path="/detail/:postId" element={<Detail />} />
                <Route path="/subscription" element={<Subscription />} />
                <Route path="/userinfo" element={<User />} />
                <Route path="/top-up" element={<TopUpPage />} />
                <Route path="/top-up-nofi" element={<TopUpNofi />} />
                <Route path="*" element={<div>Trang không tìm thấy</div>} />
              </Routes>
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
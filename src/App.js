import React, { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import './App.css';
import Posts from './Components/Post/Posts';
import Team from './Components/Teams/Team';
import AddPost from './Components/Post/AddPost';
import Menulist from './Components/Categories/Menulist';
import Home from './Components/Dashboard/Home';
import { FaCircleChevronLeft } from "react-icons/fa6";
import AddlistItem from './Components/Categories/AddlistItem';
import Person from './assets/man.png';
import Dashboardicon from './assets/dasboardicon.svg';
import Blogicon from './assets/blogicon.svg';
import Logouticon from './assets/logout.svg';
import BlogCategory from './assets/BlogCategory.svg';
import Logo from './assets/Rocco-Video-Logo.jpg';
import Teamicon from './assets/team.svg';
import Roleicon from './assets/role.svg';
import Bannericon from './assets/banner.svg';
import AddBanner from './Components/Banner/AddBanner';
import Banner from './Components/Banner/Banner';
import Role from './Components/Role/Role';
import AddRole from './Components/Role/AddRole';

function App({ onLogout }) {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setIsRotated(!isRotated);
  };

  const goToDashboard = () => navigate('/');
  const goToAllPosts = () => navigate('/posts');
  const goToCategories = () => navigate('/category');
  const goToTeam = () => navigate('/team');
  const goToRole = () => navigate('/role');
  const goToBanner = () => navigate('/banner');

  return (
    <div className="App">
      <div className='content-section'>
        <div className={`left ${isCollapsed ? 'collapsed' : ''}`}>
          <img className='logo' src={Logo} alt="Logo" />
          <ul>
            <li onClick={goToDashboard}>
              <img src={Dashboardicon} className='list-icons' alt="Dashboard" /><p>Dashboard</p>
            </li>
            <li onClick={goToAllPosts}>
              <img src={Blogicon} className='list-icons' alt="All Posts" /><p>All Posts</p>
            </li>
            <li onClick={goToCategories}>
              <img src={BlogCategory} className='list-icons' alt="Categories" /><p>Categories</p>
            </li>
            <li onClick={goToTeam}>
              <img src={Teamicon} className='list-icons' alt="Team" /><p>Team</p>
            </li>
            <li onClick={goToRole}>
              <img src={Roleicon} className='list-icons' alt="Role" /><p>Role</p>
            </li>
            <li onClick={goToBanner}>
              <img src={Bannericon} className='list-icons' alt="Banner" /><p>Banner</p>
            </li>
            <li>
              <img src={Person} className='list-person-icons' alt="Profile" /><p>Profile</p>
            </li>
            <li onClick={onLogout}>
              <img src={Logouticon} className='list-icons' alt="Logout" /><p>Logout</p>
            </li>
          </ul>
        </div>

        <FaCircleChevronLeft className={`close-logo ${isRotated ? 'rotated' : ''}`} onClick={handleCollapse} />

        <div className={`right ${isCollapsed ? 'expanded' : ''}`}>
          <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/posts" element={<Posts/>} />
            <Route path="/posts/Add" element={<AddPost/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/role" element={<Role/>} />
            <Route path="/role/add" element={<AddRole/>} />
            <Route path="/banner" element={<Banner/>} />
            <Route path="/banner/add" element={<AddBanner/>} />
            <Route path="/category" element={<Menulist/>} />
            <Route path="/category/create" element={<AddlistItem/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

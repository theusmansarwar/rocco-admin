import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Posts from './Components/Post/Posts';
import Team from './Components/Teams/Team';
import AddPost from './Components/Post/AddPost';
import Menulist from './Components/Categories/Menulist';
import Home from './Components/Dashboard/Home';
import { FaCircleChevronLeft } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { RiTeamLine } from "react-icons/ri";
import AddlistItem from './Components/Categories/AddlistItem';
import Person from './assets/man.png';
import Dashboardicon from './assets/dasboardicon.svg';
import Blogicon from './assets/blogicon.svg';
import Logouticon from './assets/logout.svg';
import BlogCategory from './assets/BlogCategory.svg';
import Logo from './assets/Rocco-Video-Logo.jpg';
import Teamicon from './assets/team.svg';

function App() {
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

  return (
    <div className="App">
      <div className='content-section'>
        <div className={`left ${isCollapsed ? 'collapsed' : ''}`}>
          <img className='logo' src={Logo} />
          <ul>
            <li onClick={goToDashboard}>
              <img src={Dashboardicon} className='list-icons' /><p>Dashboard</p>
            </li>
            <li onClick={goToAllPosts}>
              <img  src={Blogicon}  className='list-icons' /><p>All Posts</p>
            </li>
            <li onClick={goToCategories}>
              <img src={BlogCategory}  className='list-icons' /><p>Categories</p>
            </li>
            <li onClick={goToTeam}>
              <img src={Teamicon} className='list-icons' /><p>Team</p>
            </li>
            <li onClick={goToTeam}>
              <img src={Teamicon} className='list-icons' /><p>Team</p>
            </li>
            <li onClick={goToTeam}>
              <img src={Teamicon} className='list-icons' /><p>Team</p>
            </li>
            <li onClick={goToTeam}>
              <img  src={Person} className='list-person-icons' /><p>Profile</p>
            </li>
            <li>
              <img src={Logouticon}  className='list-icons' /><p>Logout</p>
            </li>
          </ul>
        </div>

        <FaCircleChevronLeft className={`close-logo ${isRotated ? 'rotated' : ''}`} onClick={handleCollapse} />

        <div className={`right ${isCollapsed ? 'expanded' : ''}`}>
         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/Add" element={<AddPost />} />
            <Route path="/team" element={<Team />} />
            <Route path="/category" element={<Menulist />} />
            <Route path="/category/create" element={<AddlistItem />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Posts from './Components/Posts';
import Team from './Components/Team';
import AddPost from './Components/AddPost';
import Menulist from './Components/Menulist';
import Home from './Components/Home';
import { PiCaretCircleDoubleLeftFill } from "react-icons/pi";
import { MdOutlineDashboard } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { RiTeamLine } from "react-icons/ri";
import AddlistItem from './Components/AddlistItem';

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
          <img className='logo' src='./roco2.jpg' alt="Logo" />
          <ul>
            <li onClick={goToDashboard}>
              <MdOutlineDashboard className='list-icons' /><p>Dashboard</p>
            </li>
            <li onClick={goToAllPosts}>
              <IoCreateOutline className='list-icons' /><p>All Posts</p>
            </li>
            <li onClick={goToCategories}>
              <FaRegListAlt className='list-icons' /><p>Categories</p>
            </li>
            <li onClick={goToTeam}>
              <RiTeamLine className='list-icons' /><p>Team</p>
            </li>
            <li>
              <FiLogOut className='list-icons' /><p>Logout</p>
            </li>
          </ul>
        </div>

        <PiCaretCircleDoubleLeftFill className={`close-logo ${isRotated ? 'rotated' : ''}`} onClick={handleCollapse} />

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

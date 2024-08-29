import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './Banner.css'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddBanner from './AddBanner';

const Banner = () => {
    const navigate = useNavigate();
  const [isAddBannerVisible, setIsAddBannerVisible] = useState(false);
  
  const [editData, setEditData] = useState(null);

  const handleArticle = () => {
    navigate('/Banner/Add')
  };

  const handleHideAddBanner = () => {
    setIsAddBannerVisible(false);
  };

  const Banners = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      title: "The Future of AI in Tech",
      created_date: "2024-08-20",
      No_of_days: 20
    },
    
  ];

  const handleEditPost = (Banner) => {
    navigate('/banner/add', { state: { Banner } });
  };

  return (
    <div>
      {isAddBannerVisible ? (
        <AddBanner handleHideAddBanner={handleHideAddBanner} />
      ) : (
        
        <>
          <div className='add-Banners-button'>
            <h2>Banner</h2>
            <button type='button' onClick={handleArticle}>+ New Banner</button>
          </div>

          <div className='Banners-list'>
            {Banners.map(Banners => (
              <div key={Banners.id} className='Banners-item'>
                <div className='Banners-item-left'>
                  <img src={Banners.img} alt={Banners.title} className='Banners-image' style={{ height: '200px', objectFit: 'cover' }} />
                </div>
                <div className='Banners-item-mid'>
                  <h3>{Banners.title}</h3>
                  <p className='Banners-date'><small><b>Created on: </b></small>{Banners.created_date}</p>
                  <p className='Banners-date'><small><b>No of days: </b></small> {Banners.No_of_days}</p>
                </div>
                <div className='Banners-item-right'>
                  <p>{Banners.category}</p>
                </div>
                <div className='Banners-item-edit'>
                  <FaRegEdit className='edit-icon' onClick={() => handleEditPost(Banners)} />
                  <RiDeleteBin6Line className='delete-icon' />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Banner;

import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoMdCloseCircle } from "react-icons/io";

const AddBanner = ({ handleHideAddPost }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const Banners = location.state?.Banners;
  const dummyimg = '../image.png';
  const fileInputRef = useRef(null);
  const [title, setTitle] = useState(Banners?.title || '');
  const [image, setImage] = useState(Banners?.img || dummyimg);
  const [selectedOption, setSelectedOption] = useState(Banners?.No_of_days || '');
  const [showDeleteIcon, setShowDeleteIcon] = useState(!!Banners?.img);

  const options = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log("Image data loaded:", reader.result);
        setImage(reader.result);
        setShowDeleteIcon(true);
      };
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleDeleteClick = () => {
    setImage(dummyimg);
    setShowDeleteIcon(false);
  };

  useEffect(() => {
    if (Banners) {
      setTitle(Banners.title);
      setImage(Banners.img);
    }
  }, [Banners]);

  const handleCancel = () => {
    navigate('/banner');
  };

  return (
    <div className='AddPost'>
      <h3>Create New Post</h3>
      <div className='upper-input-area'>
        <input
          type='text'
          placeholder='Add title'
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Added onChange handler to update title
        />
        <select id="dropdown" value={selectedOption} onChange={handleChange}>
          <option value="">No of days</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <p>Select Banner Image</p>
        <div className='image-container'>
          <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
            <img
              src={image}
              alt="Thumbnail"
              onClick={handleImageClick}
            />
            {showDeleteIcon && (
              <IoMdCloseCircle
                className='remove-icon'
                onClick={handleDeleteClick}
              />
            )}
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className='button-sections'>
        <button className='cancelbtn' onClick={handleCancel}>Cancel</button>
        <button className='published'>Publish</button>
      </div>
    </div>
  );
};

export default AddBanner;

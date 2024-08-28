import React, { useState, useEffect,useRef } from 'react';
import './Addlistitem.css';
import { IoMdCloseCircle } from "react-icons/io";
const AddlistItem = ({ handleHideAddPost, onAddCategory, editData }) => {
  const [category, setCategory] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [showDeleteIcon, setShowDeleteIcon] = useState();
  const dummyimg = '../dummy.png';
  const fileInputRef = useRef(null);
  const [image, setImage] = useState( dummyimg);
  useEffect(() => {
    if (editData) {
      setCategory(editData.category);
      setIsEdit(true);
    } else {
      setCategory('');
      setIsEdit(false);
    }
  }, [editData]);

  const handleInputChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = () => {
    if (category.trim()) {
      onAddCategory({ category, isEdit });
      setCategory('');
    }
  };
  
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleDeleteClick = () => {
    setImage(dummyimg);
    setShowDeleteIcon(false); 
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


  return (
    <div className='addlist'>
      <div className='add-list-item'>
        <h3>{isEdit ? 'Edit Category' : 'Add New Category'}</h3>
        <div className='image-container2'>
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
        <input 
          type='text' 
          placeholder='Category Name' 
          className='input' 
          value={category} 
          onChange={handleInputChange}
        />
        <select  >
          <option>Enabled</option>
          <option>Disabled</option>
          
        </select>
        <button className='add-button' onClick={handleSubmit}>
          {isEdit ? 'Update Category' : '+ Add Category'}
        </button>
        <button className='cancel-button' onClick={handleHideAddPost}>Cancel</button>
      </div>
    </div>
  );
};

export default AddlistItem;

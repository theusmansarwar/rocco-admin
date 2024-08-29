import React, { useState, useEffect,useRef } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
const AddRole = ({ handleHideAddPost, onAddCategory, editData }) => {
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
        <h3>{isEdit ? 'Edit Role' : 'Add New Role'}</h3>
      
        <input 
          type='text' 
          placeholder='Role Name' 
          className='input' 
          value={category} 
          onChange={handleInputChange}
        />
       <div className='switch-div'>
          <p>Visibility : enable / disable</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className='btn-section'>
        <button className='add-button' onClick={handleSubmit}>
          {isEdit ? 'Update Role' : '+ Add Role'}
        </button>
        <button className='cancel-button' onClick={handleHideAddPost}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddRole;

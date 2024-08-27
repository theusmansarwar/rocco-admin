import React, { useState, useEffect } from 'react';
import './Addlistitem.css';

const AddlistItem = ({ handleHideAddPost, onAddCategory, editData }) => {
  const [category, setCategory] = useState('');
  const [isEdit, setIsEdit] = useState(false);

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

  return (
    <div className='addlist'>
      <div className='add-list-item'>
        <h3>{isEdit ? 'Edit Category' : 'Add New Category'}</h3>
        <input 
          type='text' 
          placeholder='Category Name' 
          className='input' 
          value={category} 
          onChange={handleInputChange}
        />
        <button className='add-button' onClick={handleSubmit}>
          {isEdit ? 'Update Category' : '+ Add Category'}
        </button>
        <button className='cancel-button' onClick={handleHideAddPost}>Cancel</button>
      </div>
    </div>
  );
};

export default AddlistItem;

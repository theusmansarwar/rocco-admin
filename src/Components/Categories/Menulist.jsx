import React, { useState } from 'react';
import './Menulist.css';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

import AddlistItem from './AddlistItem';

const Menulist = () => {
  const [isAddPostVisible, setIsAddPostVisible] = useState(false);
  const [editData, setEditData] = useState(null);
  const [options, setOptions] = useState([
    { id: 1, category: 'Tech' },
    { id: 2, category: 'Entertainment' },
    { id: 3, category: 'Business' },
    { id: 4, category: 'Sports' },
    { id: 5, category: 'Politics' },
    { id: 6, category: 'Latest' },
    { id: 7, category: 'Showbiz' },
    { id: 8, category: 'Global' },
    { id: 9, category: 'More' }
  ]);

  const handleArticle = () => {
    setIsAddPostVisible(true);
  };

  const handleHideAddPost = () => {
    setIsAddPostVisible(false);
    setEditData(null); 
  };

  const handleAddCategory = ({ category, isEdit }) => {
    if (isEdit && editData) {
      // Update existing category
      setOptions((prevOptions) =>
        prevOptions.map((option) =>
          option.id === editData.id ? { ...option, category } : option
        )
      );
    } else {
      // Add new category
      setOptions((prevOptions) => [
        ...prevOptions,
        { id: prevOptions.length + 1, category }
      ]);
    }
    handleHideAddPost();
  };

  const handleDeleteClick = (id) => {
    setOptions((prevOptions) =>
      prevOptions.filter((option) => option.id !== id)
    );
  };

  const handleEditClick = (id) => {
    const categoryToEdit = options.find(option => option.id === id);
    setEditData(categoryToEdit);
    setIsAddPostVisible(true);
  };

  return (
    <div>
      {isAddPostVisible ? (
        <AddlistItem 
          handleHideAddPost={handleHideAddPost} 
          onAddCategory={handleAddCategory} 
          editData={editData}
        />
      ) : (
        <>
          <div className='add-post-button'>
            <h2>Categories</h2>
            <button type='button' onClick={handleArticle}>+ New Item</button>
          </div>

          <div className='posts-list'>
            {options.map((option) => (
              <div key={option.id} className='menu-list-item'>
                <div className='menu-list-item-mid'>
                  <h4>{option.category}</h4>
                </div>
                <div className='menu-list-item-edit'>
                  <FaRegEdit className='edit-icon' onClick={() => handleEditClick(option.id)} />
                  <RiDeleteBin6Line className='delete-icon' onClick={() => handleDeleteClick(option.id)} />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Menulist;

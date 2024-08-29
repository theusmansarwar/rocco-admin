import React, { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

import AddRole from './AddRole';

const Role = () => {
  const [isAddRoleVisible, setIsAddRoleVisible] = useState(false);
  const [editData, setEditData] = useState(null);
  const [options, setOptions] = useState([
    { id: 1, category: 'Admin' },
    { id: 2, category: 'Moderator' },
    { id: 2, category: 'User' },
    { id: 2, category: 'Manager' },
  
  ]);

  const handleArticle = () => {
    setIsAddRoleVisible(true);
  };

  const handleHideAddPost = () => {
    setIsAddRoleVisible(false);
    setEditData(null); 
  };

  const handleAddCategory = ({ category, isEdit }) => {
    if (isEdit && editData) {
     
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
    setIsAddRoleVisible(true);
  };

  return (
    <div>
      {isAddRoleVisible ? (
        <AddRole 
          handleHideAddPost={handleHideAddPost} 
          onAddCategory={handleAddCategory} 
          editData={editData}
        />
      ) : (
        <>
          <div className='add-post-button'>
            <h2>Role</h2>
            <button type='button' onClick={handleArticle}>+ New Role</button>
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

export default Role;

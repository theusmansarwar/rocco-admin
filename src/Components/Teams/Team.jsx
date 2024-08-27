import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Team.css';
import { RiDeleteBin6Line } from "react-icons/ri";

const Team = ({ refresh }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [setisAddUserVisible, setIsAddUserVisible] = useState(null);
  const token = localStorage.getItem('authToken');
  const options = ['admin', 'moderator', 'editor'];
  const [selectedOptions, setSelectedOptions] = useState({}); 
 
  useEffect(() => {
 

    const fetchUsers = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('API Response:', response.data);
        const usersData = Array.isArray(response.data) ? response.data : response.data.users || [];
        setUsers(usersData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [refresh, token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleChange = (event, userId) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [userId]: event.target.value,
    }));
  };
  const handleUser = () => {
    setIsAddUserVisible(true);
  };

  return (
   
    <div>
    
            <h2>Users</h2>
           


      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} className='user-card'>
            <p>{user.id}</p>
            <p className='username'>{user.username}</p>
            <p className='email'>{user.email}</p>
            <p className='phone'>{user.phone}</p>
            <p className='date'>{new Date(user.created_at).toLocaleString()}</p>
            <select
              className='dropdown'
              value={selectedOptions[user.id] || ''}
              onChange={(event) => handleChange(event, user.id)}
            >
              <option value="">Select a category</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <RiDeleteBin6Line className='delete-icon' />
          </div>
        ))
      ) : (
        <p>No users available</p>
      )}
    </div>
 
  );
};

export default Team;

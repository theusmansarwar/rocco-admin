import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './Posts.css';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddPost from './AddPost';

const Posts = () => {
    const navigate = useNavigate();
  const [isAddPostVisible, setIsAddPostVisible] = useState(false);

  const handleArticle = () => {
    navigate('/posts/Add')
  };

  const handleHideAddPost = () => {
    setIsAddPostVisible(false);
  };

  const posts = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      title: "The Future of AI in Tech",
      created_date: "2024-08-20",
      description: "Exploring how artificial intelligence how artificial intelligence i how artificial intelligence i how artificial intelligence i how artificial intelligence i how artificial intelligence i is shaping the future of technology and its impact on various industries.",
      category: "Tech"
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab",
      title: "Top 10 Must-Watch Movies of 2024",
      created_date: "2024-08-19",
      description: "A list of the top 10 movies to watch this year, spanning various genres and languages.",
      category: "Entertainment"
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1522098543979-ffc7f79b128b",
      title: "How Startups Are Disrupting Traditional Markets",
      created_date: "2024-08-18",
      description: "An analysis of how innovative startups are changing the business landscape.",
      category: "Business"
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      title: "The Rise of E-Sports in 2024",
      created_date: "2024-08-17",
      description: "An in-depth look at how e-sports are gaining popularity among younger audiences.",
      category: "Sports"
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
      title: "The Impact of New Policies on Global Trade",
      created_date: "2024-08-16",
      description: "How recent political changes are influencing international trade dynamics.",
      category: "Politics"
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      title: "Latest Trends in Fashion for 2024",
      created_date: "2024-08-15",
      description: "A comprehensive guide to the hottest fashion trends to watch out for this year.",
      category: "Latest"
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1529260830460-74dc1dfc1a02",
      title: "Celebrity Scandals That Shook the World",
      created_date: "2024-08-14",
      description: "A rundown of the most shocking celebrity scandals of the year.",
      category: "Showbiz"
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
      title: "Global Warming: A Growing Concern",
      created_date: "2024-08-13",
      description: "Discussing the increasing effects of global warming on the planet.",
      category: "Global"
    },
    {
      id: 9,
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
      title: "Quantum Computing: The Next Big Thing?",
      created_date: "2024-08-12",
      description: "A deep dive into quantum computing and its potential to revolutionize technology.",
      category: "Tech"
    },
    {
      id: 10,
      img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
      title: "The Evolution of Music Streaming in 2024",
      created_date: "2024-08-11",
      description: "How music streaming platforms have evolved and what's new in 2024.",
      category: "Entertainment"
    },    {
      id: 11,
      img:"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
      title: "This is testing list",
      created_date: "2024-08-11",
      description: "How music streaming platforms have evolved and what's new in 2024.",
      category: "Entertainment"
    }
  ];

  const handleEditPost = (post) => {
    navigate('/posts/Add', { state: { post } });
  };

  return (
    <div>
      {isAddPostVisible ? (
        <AddPost handleHideAddPost={handleHideAddPost} />
      ) : (
        
        <>
          <div className='add-post-button'>
            <h2>Posts</h2>
            <button type='button' onClick={handleArticle}>+ New Post</button>
          </div>

          <div className='posts-list'>
            {posts.map(post => (
              <div key={post.id} className='post-item'>
                <div className='post-item-left'>
                  <img src={post.img} alt={post.title} className='post-image' style={{ height: '200px', objectFit: 'cover' }} />
                </div>
                <div className='post-item-mid'>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <p className='post-date'>{post.created_date}</p>
                </div>
                <div className='post-item-right'>
                  <p>{post.category}</p>
                </div>
                <div className='post-item-edit'>
                  <FaRegEdit className='edit-icon' onClick={() => handleEditPost(post)} />
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

export default Posts;

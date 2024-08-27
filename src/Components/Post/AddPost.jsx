import React, { useState,useEffect, useRef, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import './Addpost.css';
import { IoMdCloseCircle } from "react-icons/io";

const AddPost = ({ placeholder }) => {
  const location = useLocation();
  const post = location.state?.post;
  const dummyimg = '../dummy.png';
  const fileInputRef = useRef(null);
  const editor = useRef(null);
  const [title, setTitle] = useState(post?.title || '');
  const [heading, setHeading] = useState(post?.description || '');
  const [selectedOption, setSelectedOption] = useState(post?.category || '');
  const [image, setImage] = useState(post?.img || dummyimg);
  const [content, setContent] = useState(post?.content || '');
  const [showDeleteIcon, setShowDeleteIcon] = useState(!!post?.img);


  const options = [
    'Tech',
    'Entertainment',
    'Business',
    'Sports',
    'Politics',
    'Latest',
    'Showbiz',
    'Global',
    'More'
  ];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const config = useMemo(
    () => ({
      readonly: false,
      uploader: {
        insertImageAsBase64URI: true, 
      },
      placeholder: placeholder || 'Start typing...'
    }),
    [placeholder]
  );

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
    if (post) {
      setTitle(post.title);
      setHeading(post.description);
      setSelectedOption(post.category);
      setImage(post.img);
      setContent(post.content);
      setShowDeleteIcon(true);
    }
  }, [post]);

  return (
    <div className='AddPost'>
      <h3>Create New Post</h3>
      <div className='upper-input-area'>
        <input type='text' placeholder='Add title' value={title} />
        <input type='text' placeholder='Add heading' value={heading}/>
        <select id="dropdown" value={selectedOption} onChange={handleChange}>
          <option value="">Select a category</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <h5>Select Thumbnail Image</h5>
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

      <JoditEditor
        className='joditEditor'
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} 
        onBlur={(newContent) => setContent(newContent)} 
        onChange={(newContent) => {}}
      />
      <div className='button-section'> <button className='published'>Publish</button></div>
      
    </div>
  );
};

export default AddPost;

import React, { useState } from 'react';
import './Home.css'
import { PiArticleNyTimesDuotone } from "react-icons/pi";
import { IoIosEye } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import Chart from './Chart';
import Areachart from './Areachart'

import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
const Home = () => {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);


  return (
    <div className='content-sections'>
      <div className='top-headinf-dashboard'><h2>Hi, Welcome Back</h2>
      <div className='date-input-area'>
      <input type='date' className='date-input'/>
      <input type='date' className='date-input'/>
      </div>
     
 </div>
      
      <div class="cards">
        <div class="card">
        <PiArticleNyTimesDuotone className='card-icon' />
          <div className='card-lower-section'>
            <h3>40</h3>
            <p>Total Posts</p>
          </div>
        </div>
        <div class="card0">
        <FaUsers className='card-icon' />
        
          <div className='card-lower-section'>
            <h3>50</h3>
            <p>Total Users</p>
          </div>
        </div>
        <div class="card2">
        <IoIosEye className='card-icon' />
        
          <div className='card-lower-section'>
            <h3>40000</h3>
            <p>Today</p>
          </div>
        </div>
        <div class="card3">
        <IoIosEye className='card-icon' />
          
          <div className='card-lower-section'>
            <h3>1040</h3>
            <p>Yesterday</p>
          </div>
        </div>
        <div class="card4">
        <IoIosEye className='card-icon' />
         
          <div className='card-lower-section'>
            <h3>9848030</h3>
            <p>This Month</p>
          </div>
        </div>
        <div class="card5">
        <IoIosEye className='card-icon' />
        
          <div className='card-lower-section'>
            <h3>438947</h3>
            <p>Last Month</p>
          </div>
        </div>
        <div class="card6">
        <IoIosEye className='card-icon' />
          <div className='card-lower-section'>
            <h3>13689137</h3>
            <p>All Time</p>
         
          </div>
        </div>


      </div>
      
      <div className='charts-areas'>
        <div className='left-chart'>
          <Chart />
        </div>
        <div className='right-chart'>
          <Areachart />
        </div>
      </div>
    </div>
  )
}

export default Home
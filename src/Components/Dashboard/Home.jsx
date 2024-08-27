import React, { useState } from 'react';
import './Home.css'
import { PiArticleNyTimesDuotone } from "react-icons/pi";
import { IoIosEye } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import Chart from './Chart';
import Areachart from './Areachart'
const Home = () => {

  return (
    <div className='content-sections'>
      <h2>Hi, Welcome Back</h2>
      <div class="cards">
        <div class="card">
          <p>Total Posts</p>
          <div className='card-lower-section'>
            <h3>40</h3>
            <PiArticleNyTimesDuotone className='card-icon' />
          </div>
        </div>
        <div class="card0">
          <p>Total Users</p>
          <div className='card-lower-section'>
            <h3>50</h3>
            <FaUsers className='card-icon' />
          </div>
        </div>
        <div class="card2">
          <p>Today</p>
          <div className='card-lower-section'>
            <h3>40000</h3>
            <IoIosEye className='card-icon' />
          </div>
        </div>
        <div class="card3">
          <p>Yesterday</p>
          <div className='card-lower-section'>
            <h3>1040</h3>
            <IoIosEye className='card-icon' />
          </div>
        </div>
        <div class="card4">
          <p>This Month</p>
          <div className='card-lower-section'>
            <h3>9848030</h3>
            <IoIosEye className='card-icon' />
          </div>
        </div>
        <div class="card5">
          <p>Last Month</p>
          <div className='card-lower-section'>
            <h3>438947</h3>
            <IoIosEye className='card-icon' />
          </div>
        </div>
        <div class="card6">
          <p>All Time</p>
          <div className='card-lower-section'>
            <h3>136891370</h3>
            <IoIosEye className='card-icon' />
          </div>
        </div>


      </div>
      <h3 className='Visitors-heading'>Visitors</h3>

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
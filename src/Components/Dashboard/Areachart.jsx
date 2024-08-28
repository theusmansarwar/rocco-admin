// src/VisitorsAreaChart.jsx

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Sample data for the chart representing visitors for each day in a month
const data = [
  { day: '1', visitors: 150 },
  { day: '2', visitors: 200 },
  { day: '3', visitors: 120 },
  { day: '4', visitors: 250 },
  { day: '5', visitors: 180 },
  { day: '6', visitors: 320 },
  { day: '7', visitors: 270 },
  { day: '8', visitors: 340 },
  { day: '9', visitors: 190 },
  { day: '10', visitors: 220 },
  { day: '11', visitors: 300 },
  { day: '12', visitors: 310 },
  { day: '13', visitors: 200 },
  { day: '14', visitors: 230 },
  { day: '15', visitors: 180 },
  { day: '16', visitors: 290 },
  { day: '17', visitors: 360 },
  { day: '18', visitors: 200 },
  { day: '19', visitors: 210 },
  { day: '20', visitors: 230 },
  { day: '21', visitors: 320 },
  { day: '22', visitors: 280 },
  { day: '23', visitors: 150 },
  { day: '24', visitors: 300 },
  { day: '25', visitors: 320 },
  { day: '26', visitors: 190 },
  { day: '27', visitors: 240 },
  { day: '28', visitors: 280 },
  { day: '29', visitors: 330 },
  { day: '30', visitors: 310 },
];

const Areachart = () => {
  return (
    <div className='chart-area'>
    <ResponsiveContainer width="100%" height='100%'>
      <AreaChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" label={{ value: 'Day of the Month', position: 'insideBottomRight', offset: -5 }} />
        <YAxis label={{ value: 'Number of Visitors', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Area type="monotone" dataKey="visitors" stroke="#4FD1C5" fill="#4FD1C5" />
      </AreaChart>
    </ResponsiveContainer>
    </div>
  );
};

export default Areachart;

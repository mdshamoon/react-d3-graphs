import React from 'react';
import { BarChart } from '../../../dist/index.modern';

const data = [
  {
    value: 20,
  },
  {
    value: 30,
  },
];

const HorizontalBarChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Horizontal Bar Chart</h1>
      <BarChart width={300} height={400} data={data}></BarChart>
    </div>
  </>
);

export default HorizontalBarChart;

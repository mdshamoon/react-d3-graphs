import React from 'react';
import { Bar } from './graphs/Bar';
import { BarGraphProps } from './types';

export const BarChart = (props: BarGraphProps) => (
  <div>
    <h1>Bar graph</h1>
    <Bar {...props} />
  </div>
);

export default BarChart;

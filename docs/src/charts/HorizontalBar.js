import React, { useState } from 'react';
import { BarChart } from 'react-d3-graphs';
import 'react-d3-graphs/dist/index.css';
import { SketchPicker } from 'react-color';
import styles from './HorizontalBar.module.css';

const data = [
  {
    value: 20,
  },
  {
    value: 30,
  },
  {
    value: 12,
  },
];

const HorizontalBarChart = () => {
  const [barColor, setBarColor] = useState('#456');
  const [bgColor, setBgColor] = useState('#fff');
  const [colorSelect, setColorSelect] = useState('bar');

  const pickedColor = ({ hex }) => {
    console.log(colorSelect, hex);
    if (colorSelect === 'bar') {
      setBarColor(hex);
    } else if (colorSelect === 'background') {
      setBgColor(hex);
    }
  };

  return (
    <>
      <h1 className='title'>Horizontal Bar chart</h1>
      <div className={styles.Header}>
        <BarChart
          width={400}
          height={400}
          data={data}
          barColor={barColor}
          bgColor={bgColor}
        ></BarChart>

        <div className={styles.ColorSelector}>
          <select onChange={event => setColorSelect(event.target.value)}>
            <option value='bar'>Bar color</option>
            <option value='background'>Background color</option>
          </select>

          <SketchPicker
            color={colorSelect === 'bar' ? barColor : bgColor}
            onChangeComplete={color => pickedColor(color)}
          />
        </div>
      </div>
    </>
  );
};

export default HorizontalBarChart;

import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { BarGraphProps } from '../types';
import styles from './Bar.module.css';

export const Bar = ({
  width,
  height,
  data,
  barColor,
  bgColor,
}: BarGraphProps) => {
  const ref: any = useRef();
  const divRef = useRef(null);

  useEffect(() => {
    d3.select(ref.current).attr('width', width).attr('height', height);
  }, []);

  const draw = () => {
    const maxY = d3.max(data.map((dat: any) => dat.value));

    const maximumY = maxY !== undefined ? parseInt(maxY) : 0;

    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();
    const selection = svg.selectAll('rect').data(data);
    const div = d3.select(divRef.current);

    const yScale = d3
      .scaleLinear()
      .domain([0, maximumY * 1.25])
      .range([height, 0]);

    selection
      .transition()
      .duration(300)
      .attr('height', (d: any) => (d.value > 0 ? yScale(d.value) : 0))
      .attr('y', (d: any) => height - yScale(d.value));

    const gg = svg
      .append('g')
      .attr('class', styles.BarAxis)
      .call(
        d3
          .axisLeft(yScale)
          .ticks(8)
          .tickSize(-width + 10)
      );
    gg.selectAll('text').attr('fill', barColor);

    selection
      .enter()
      .append('rect')
      .attr('x', (_d, i) => i * 45 + 10)
      .attr('y', () => height)
      .attr('width', 32)
      .attr('height', 0)
      .attr('fill', barColor)
      .on('mouseover', (position, value: any) => {
        div
          .html(`<div className='font-karla'>${value.value.toFixed(1)}</div>`)
          .style('left', `${position.pageX}px`)
          .style('top', `${position.pageY - 30}px`);

        div.transition().duration(200).style('display', 'block');
      })
      .on('mouseout', () => {
        div.transition().duration(500).style('display', 'none');
      })
      .transition()
      .duration(300)
      .attr('height', (d: any) => (d.value > 0 ? height - yScale(d.value) : 0))
      .attr('y', (d: any) => yScale(d.value));

    svg
      .append('rect')
      .attr('x', () => 0)
      .attr('y', () => height)
      .attr('width', '100%')
      .attr('height', 2)
      .attr('fill', barColor);

    selection
      .exit()
      .transition()
      .duration(300)
      .attr('y', () => height)
      .attr('height', 0)
      .remove();
  };

  useEffect(() => {
    draw();
  }, [data, barColor, bgColor]);

  return (
    <div className={styles.Bar} style={{ backgroundColor: bgColor }}>
      <svg ref={ref} />
      <div ref={divRef} className={styles.BarGraphTooltip} />
    </div>
  );
};

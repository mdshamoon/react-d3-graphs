import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <div className='header'>
      <h1 className='title'>react-d3-graphs</h1>
      <h2 className='subtitle'>React wrapper for d3.js</h2>
      <div className='links'>
        <a
          className='btn btn-npm'
          href='https://www.npmjs.com/package/react-d3-graphs'
        >
          NPM
        </a>
        <a
          className='btn btn-gh'
          href='https://github.com/mdshamoon/eact-d3-graphs'
        >
          Github
        </a>
      </div>
    </div>
    <hr />
    <div className='categories'>
      <div className='category'>
        <h3 className='title'>Bar Charts</h3>
        <ul className='items'>
          <li className='entry'>
            <Link to='/horizontal-bar'>Vertical</Link>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default Home;

# react-d3-graphs

React wrapper for d3.js

## Getting started

### Install library with peer dependencies

```bash
npm install --save react-d3-graphs

# or

yarn add react-d3-graphs
```

### Usage

```jsx
import { Bar } from 'react-d3-graphs';

<Bar data={...} />
```

## Configure

### Bar graph props

```js
width: number;
height: number;
data: Array[{ value: string }];
barColor: string;
bgColor: string;
```

#### width

Type `number`
Default: `undefined`

width of the graph

#### height

Type `number`
Default: `undefined`

height of the graph

#### data

Type: `Array of values`
Default: `undefined`

An array of values for the graph

#### barColor

Type: `string`
Default: `#000000`

Color of the bar and text in hex

#### bgColor

Type: `string`
Default: `#000000`

Color of the background in hex

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

<Bar width={300} height={400} barColor="#fff" bgColor="#234f22" data={ [ {value: 10}, {value:20} ] } />
```

<img src="https://user-images.githubusercontent.com/32592458/118452602-f2298100-b713-11eb-9dfb-924cd499abc1.png" width="400px" height="400px">
<img src="https://user-images.githubusercontent.com/32592458/118453151-85fb4d00-b714-11eb-813d-df4143becd22.png" width="400px" height="400px">


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

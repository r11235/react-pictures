import React from 'react';
import { render } from 'react-dom';
import App from './App';

const img1 = "./images/pic1.jpg";
const img2 = "./images/pic1.jpg";

const pictures = [{text:"Picture1", image:img1}, 
  {text:"Picture2", image:img2}];

render(<App pictures={pictures}/>, document.querySelector('#app'));
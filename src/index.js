import {generateTopBar} from './top-bar/top-bar.js' ;

const pageContent = document.querySelector('#content');
const topBar = generateTopBar();

pageContent.appendChild(topBar);

console.log(topBar)

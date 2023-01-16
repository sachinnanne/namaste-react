/**
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher Algorithm - C++
 * BUILDING
 * MINFY
 * Cleaning our Code
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while developement
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * Port Number
 * Consistent Hashing ALgorithm
 * Zero Config 
 * Transitive Dependencies 
 */


import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement('h1', {id: 'title'}, 'Heading 1'); 
const heading2 = React.createElement('h2', {id: 'title'}, 'Heading 2');
const container = React.createElement('div', {
    id: "container", hello: 'world',
}, [heading, heading2])
const root = ReactDOM.createRoot(document.getElementById('root'));
//passsing a react element inside the root
root.render(container);
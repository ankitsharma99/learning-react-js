import React from 'react';
import  ReactDOM  from 'react-dom/client';
// const heading = React.createElement("h1", {
//     id: "title"
// }, "Namaste everyone");
// console.log(heading);



const heading = React.createElement("h1", {}, "Heading 1 For Parcel");
const heading2 = React.createElement("h2", {}, "Heading 2");

const container = React.createElement("div", {
    id: "container"
}, [heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
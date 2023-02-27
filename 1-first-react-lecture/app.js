import React from "react";
import ReactDOM from "react-dom/client";

const temp = // React Element
  (
    <h1 id="title" key="h1">
      Hello world Temp
    </h1>
  );

// Components: Functional And Class Based

const HeaderComponent = () => {
  return (
    <div>
      <h1>Funcitonal Component</h1>
      <h2>This is an H2</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(temp);

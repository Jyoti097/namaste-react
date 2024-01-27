import React from "react";
import ReactDOM from "react-dom";

//Creating nested HTML by React
{/* <div id = "parent">
    <div id = "child">
        <h1>I'm h1 tag</h1>
    </div>
</div> */}

const parent1 = React.createElement(
    "div", 
    {id:"parent"},
    React.createElement(
        "div", 
        {id:"child"},
        React.createElement("h1", {}, "I'm a h1 tag")
    )
);


//const heading = React.createElement("h1", {id : "heading"}, "Hello from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent1);

// creating siblings 
{/* <div id = "parent">
    <div id = "child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div> */}

const parent2 = React.createElement(
    "div", 
    {id:"parent"},
    React.createElement(
        "div", 
        {id:"child"},
        [React.createElement("h1", {}, "I'm a h1 tag"), React.createElement("h2", {}, "I'm a h2 tag")]
    )
);
const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(parent2);
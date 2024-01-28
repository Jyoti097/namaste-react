import React from "react";
import ReactDOM from "react-dom/client";

// React element
const heading = React.createElement("h1", {id : "heading"}, "React learn");
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(heading);

//React functional component
const HeadingComponent = () => (
    <div>
        <h1 className="heading">Hello from functional component</h1>
    </div>
);
// Rendering React component
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>)


//JS inside react component
const data = 50;
const HeadingComponentA = () => (
    <div>
        {<h1>data</h1>}
        <h1 className="heading">Hello from functional component</h1>
    </div>
);
const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(<HeadingComponentA/>)



// React component inside another react component
const Title = () =>(
    <h1>Hello from title</h1>
);
const HeadingComponentB = () => (
    <div>
        <Title></Title>
        <h1 className="heading">Hello from functional component</h1>
    </div>
);
const root3 = ReactDOM.createRoot(document.getElementById("root"));
root3.render(<HeadingComponentB/>)


//React element inside react component
const titleA = (
    <h1>Hello from title</h1>
);
const HeadingComponentC = () => (
    <div>
        {titleA}
        <h1 className="heading">Hello from functional component</h1>
    </div>
);
const root4 = ReactDOM.createRoot(document.getElementById("root"));
root4.render(<HeadingComponentC/>)
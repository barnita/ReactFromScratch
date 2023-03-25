const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "span",
        {id: "child"},
        [React.createElement("p", {}, "This is a p tag"), React.createElement("span", {}, "This is me your second span")]
    )
)

const heading1 = React.createElement(
    "h3", 
    {id: "heading"},
    "Hello World from React script"
);
console.log(heading1);//heading1 is an object
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent);
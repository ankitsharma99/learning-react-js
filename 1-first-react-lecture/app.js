// const heading = React.createElement("h1", {
        //     id: "title"
        // }, "Namaste everyone");
        // console.log(heading);



const heading = React.createElement("h1", {}, "Heading 1");
const heading2 = React.createElement("h2", {}, "Heading 2");

const container = React.createElement("div", {}, [heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import Footer from "./components/Footer";
/* How to create object for sending data
const pizza = {
  name: "Pizza Mania",
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a46a6aa00709f771fabb45c864a81b5e",
  cusines: ["Pizza", "Italian"],
  rating: "4.2",
};
*/

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// const heading = React.createElement(
//   "h1",
//   { id: "title", key: "h1" },
//   "Food Villa"
// );
// const heading1 = React.createElement(
//   "h2",
//   { id: "title", key: "h2" },
//   "Heading1"
// );
// const container = React.createElement(
//   "div",
//   { id: "container", hello: "world", key: "h3" },
//   [heading, heading1]
// );

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);

// const headingg = <h1>Introducing JSX</h1>;

// const Heading2 = () => {
//   return <h1>this is Functional component</h1>;
// };

// const HeaderComponent = () => {
//   return (
//     <div>
//       {headingg}
//       <Heading2 />
//       <h1>just another way</h1>
//       {Heading2()}
//       <h2>Ways to render functional component</h2>
//       <h3>Functional compoents are simply functions</h3>
//     </div>
//   );
// };

// root.render(<HeaderComponent />);

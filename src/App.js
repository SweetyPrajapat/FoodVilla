import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

// import Instamart from "./components/Instamart";
const Instamart = lazy(() => import("./components/Instamart"));
//Upon Demand loading -> upon render -> suspends loading
//DONT DO LAZY LOADING INSIDE COMPONENT ---DO IT JUST AFTER IMPORT COMPONENTS

/* How to create object for sending data
const pizza = {
  name: "Pizza Mania",
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a46a6aa00709f771fabb45c864a81b5e",
  cusines: ["Pizza", "Italian"],
  rating: "4.2",
};
*/
// Chunking
// code splitting
// Dynamic bundling
// Lazy loading
// On demand loading
// Dynamic import

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Sweety",
    email: "luhaniwalsweety@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer className="caption-bottom" />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body
          // user={{
          //   name: "Sweety",
          //   email: "luhaniwalsweety@gmail.com",
          // }}
          />
        ),
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            {/* <Suspense fallback={<h1>Loading...</h1>}> */}
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout />);

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

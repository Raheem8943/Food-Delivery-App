import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Body from "./components/Body.jsx";
import App from "./App.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import Error from "./pages/Error.jsx";
import RestaurantMenu from "./pages/RestaurantMenu.jsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);

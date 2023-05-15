import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import BookService from "../Pages/BookService/BookService";
import BookingItems from "../Pages/BookingItems/BookingItems";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/checkout/:id",
          element: <BookService></BookService>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: "/booking",
          element: <PrivateRoute><BookingItems></BookingItems></PrivateRoute>
        }
      ]
    },
    {
      path: "*",
      element: <PageNotFound></PageNotFound>
    }
  ]);

export default router
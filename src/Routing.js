import React from 'react';
import { Routes, Route } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import DetailsProduct from './components/DetailsProduct/DetailsProduct';
import EditProduct from './components/EditProduct/EditProduct';
import Home from "./components/Home/Home";
import ProductsList from "./components/ProductsList/ProductsList";
import AdminPage from './pages/AdminPage';
import Error404 from './pages/Error404';


const Routing = () => {
    let PUBLIC_ROUTES = [
        {
          link: "/",
          element: <Home />,
          id: 1,
        },
        {
          link: "/products",
          element: <ProductsList />,
          id: 2,
        },
        {
          link:"/auth",
          element: <Auth />,
          id:3,
        },
        {
          link:"/products/:id",
          element:<DetailsProduct />,
          id:4,
        }
      ];
      const ADMIN_ROUTES = [
          {
              link:"/admin",
              element: <AdminPage />,
              id:1
          },
          {
            link:"/edit/:id",
            element:<EditProduct />,
            id:2
          }
      ]
    return (
        <Routes>
          {PUBLIC_ROUTES.map((item) => (
            <Route path={item.link} element={item.element} />
          ))}
        {ADMIN_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} />
        ))}
        <Route path="*" element={<Error404/>} />
      </Routes>
    );
};

export default Routing;
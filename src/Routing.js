import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "./contexts/authContext";
import Auth from "./components/Auth/Auth";
import BrandsList from './components/BrandList/BrandList';
import DetailsProduct from './components/DetailsProduct/DetailsProduct';
import EditProduct from './components/EditProduct/EditProduct';
import Home from "./components/Home/Home";
import ProductsList from "./components/ProductsList/ProductsList";
import AdminPage from './pages/AdminPage';
import Error404 from './pages/Error404';
import Cart from './components/Cart/Cart';


const Routing = () => {
    let PUBLIC_ROUTES = [
        {
          link: "/",
          element: <Home />,
          id: 1,
        },
        {
          link:"/brands",
          element:<BrandsList />,
          id:2,
        },
        {
          link: "/products",
          element: <ProductsList />,
          id: 3,
        },
        {
          link:"/auth",
          element: <Auth />,
          id:4,
        },
        {
          link:"/products/:id",
          element:<DetailsProduct />,
          id:5,
        },
        {
          link:"/cart",
          element: <Cart/>,
          id:6,
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
      ];
      const {user}= useAuth()
    return (
        <Routes>
          {PUBLIC_ROUTES.map((item) => (
            <Route path={item.link} element={item.element} />
          ))}
        { user ? ADMIN_ROUTES.map((item) => (
          <Route path={item.link} element={ user.email === "talaibekova_s@iuca.kg" ? item.element : 
            <Navigate replace to='*'/>} />
        )) : null}
        <Route path="*" element={<Error404/>} />
      </Routes>
    );
};

export default Routing;
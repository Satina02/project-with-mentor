import React from "react";
import { BrowserRouter } from "react-router-dom";

import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productsContext";
import BrandsContextProvider from "./contexts/brandsContext";

import Routing from "./Routing";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import 'antd/dist/antd.css';
import './App.css'

const App = () => {
  
  return (
    <AuthContextProvider>
      <BrandsContextProvider>
        <ProductsContextProvider>
          <BrowserRouter>
            <Header />
            <Routing />
            <Footer />
          </BrowserRouter>
        </ProductsContextProvider>
    </BrandsContextProvider>
    </AuthContextProvider>
  );
};

export default App;

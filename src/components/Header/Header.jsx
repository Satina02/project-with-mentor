import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { useAuth } from "../../contexts/authContext";

import "./Header.css";
import { cartContext } from "../../contexts/cartContext";

const Header = () => {
  const location = useLocation();
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  const {getCart, cartLength} = useContext(cartContext)
  useEffect(()=>{
    getCart()
  }, [])
  const NAV_ITEMS = [
    {
      title: "BRANDS A-Z",
      link: "/brands",
      id: 1,
    },
    {
      title: "WATCHES",
      link: "/products",
      id: 2,
    },
    {
      title: "STORES",
      link: "*",
      id: 3,
    },
    {
      title: "NEWS",
      link: "*",
      id: 4,
    },
    {
      title: "CONTACTS",
      link: "*",
      id: 5,
    },
  ];
  return (
    <>
      <nav>
        <div>
          {email ? (
            <Link to="/auth">
              <button className="sign-btn" onClick={handleLogout}>
                Logout
              </button>
            </Link>
          ) : null}

          {email ? null : (
            <Link to="/auth">
              <button className="sign-btn">Login</button>
            </Link>
          )}
        </div>
      </nav>
      <div className="header">
        <div></div>
        <Link to="/">
          <img
            width="200px"
            src="https://content.thewosgroup.com/wosus/logo/wos_since_1924_uk_blk_notag.svg"
            alt=""
          />
        </Link>
        <div>
          <Link to="/cart">
            <Badge count={+cartLength}>
              <ShoppingCartOutlined
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
            </Badge>
          </Link>
        </div>
      </div>
      <div className="navbar">
        {NAV_ITEMS.map((item) => (
          <Link
            to={item.link}
            className={
              location.pathname === item.link
                ? "navbar__item-active"
                : "navbar__item"
            }
          >
            {item.title}
          </Link>
        ))}
        {email === "talaibekova_s@iuca.kg" ? (<Link to="/admin" 
        className={
              location.pathname === '/admin'
                ? "navbar__item-active"
                : "navbar__item"
            }>Admin</Link>) : null}
        
      </div>
    </>
  );
};

export default Header;
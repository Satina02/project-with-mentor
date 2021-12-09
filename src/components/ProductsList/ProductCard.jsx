import React, { useContext, useEffect } from 'react';
import {Card} from 'antd';
import { Link } from 'react-router-dom';
import {
    ShoppingCartOutlined,
    EllipsisOutlined,
    StarOutlined,
  } from "@ant-design/icons";
  import { cartContext } from "../../contexts/cartContext";
import { useState } from 'react/cjs/react.development';


const ProductCard = ({item}) => {
    const {addProductToCart, checkItemInCart} = useContext(cartContext); 
    const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));
    useEffect(() => {
      setCheckInCart(setCheckInCart(item.id))
    })
    return (
        <Card
            hoverable
            key={item.id}
            style={{ width: "300px", margin: "10px" }}
            cover={<img alt="example" src={item.image1} />}
            actions={[
              <StarOutlined style={{ color: "black", fontSize: "25px" }} />,
              <ShoppingCartOutlined
                style={{ color: checkInCart ? "red" : "black", fontSize: "25px" }}
                 onClick={() => { 
                     addProductToCart(item); 
                     setCheckInCart(checkItemInCart(item.id));
                }}
              />,
              <Link to={`/products/${item.id}`}>
                <EllipsisOutlined
                  style={{ color: "black", fontSize: "25px" }}
                  key="ellipsis"
                />
              </Link>,
            ]}
          >
            <Card.Meta
              title={item.brand}
              description={
                <>
                  <h3>{item.model}</h3>
                  <h2>{"$" + item.price}</h2>
                </>
              }
            />
          </Card>
    );
};

export default ProductCard;
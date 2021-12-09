import React, { useContext } from "react";
import { InputNumber, List, Button } from "antd";
import { cartContext } from "../../contexts/cartContext";

const CartItem = ({ item }) => {
    const {deleteFromCart, changeProductCount} = useContext(cartContext);
    // console.log(item);
  return (
    <List.Item
      key={item.id}
      extra={
        <img
          width={272}
          alt="image"
          src={item.item.image1}
        />
      }
    >
      <List.Item.Meta
        title={
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
             <div><h3>{item.item.brand} </h3>
              <h4>{item.item.model}</h4></div>
              <h3>{"$" + item.item.price}</h3>
            </div>}
        description={<>
        <div>{item.item.description}</div>
        <div>
        <div style={{display:"flex", justifyContent:"space-between", width:"40%", marginTop:"20px"}}>
            <h4>Quality</h4>
                <Button onClick={() => changeProductCount(item.count -1, item.item.id)}>-</Button>
                <InputNumber value={item.count} disabled/>
                <Button onClick={() => changeProductCount(item.count +1, item.item.id)}>+</Button>
            </div>
           <div>
                <h4>SubPrice</h4>
                <h3>{"$" + item.subPrice}</h3>
            </div>
        </div>
        <Button onClick={() => deleteFromCart(item.item.id)}>Remove from Item</Button>
        </>} 
      />
    </List.Item>
  );
};

export default CartItem;
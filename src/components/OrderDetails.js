import React, { useState, useEffect } from "react";
import OrderProduct from "./OrderProduct";
import Order from "./Order";

const OrderDetails = ({ orderList, setOrderList}) => {
  
  const [quantity, setQuantity] = useState("");
  
  const VIEW_ORDER = () => {
  

  useEffect(VIEW_ORDER, []);

  function handleAddNewOrder(order) {
    setOrderList([...orderList, order]);
  }
  let orders = orderList.map((order) => (
    <Order
      orderQuantity={order.quantity}
      orderId={order.id}
      key={order.id}
      setOrderList={setOrderList}
      orderList={orderList}
    />
  ))
  return (
    <div>
      
      {/* <div className="row">{orders}</div> */}
      <h4>{quantity}</h4>
      {orders}
      <Order quantity={quantity}/>
      <OrderProduct handleAddNewOrder={handleAddNewOrder} />
    </div>
  );
};

export default OrderDetails;
import React,{useState,useEffect}from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import CurrentHappenings from './CurrentHappenings'
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import ProductDetails from "./ProductDetails";
import OrderDetails from "./OrderDetails";
import Order from "./Order";

function App() {
  //const [posts, setPosts] = useState([])
  const [productList, setProductList] = useState([]);
  const [orderList, setOrderList] = useState([])

  const POSTS = () => {
    fetch("http://localhost:9292/products")
      .then((response) => response.json())
      .then((products) => {
    
        setProductList(products);
      });
  };

  useEffect(POSTS, []);

  // const ORDERS = () => {
  //   fetch('http://localhost:9292/orders/${orderId}')
  //     .then((response) => response.json())
  //     .then((orders) => {console.log(orders)
    
  //       setOrderList(orders);
  //     });
  // };

  // useEffect(ORDERS, []);
  
  function handleItemUpdated(updatedItem){
    const updatedProductList = productList.map((product) => {
      if (product.id === updatedItem.id) {
        return updatedItem
      }
        else{
         return product 
        }
      
  })
  setProductList(updatedProductList)
}
  // orderList.map((order)=>(
    
  //   <Order orderList={orderList}
  //   setOrderList={setOrderList}
  //   quantity={order.quantity}
  //   orderId={order.orderId}
  //    />

  // ))
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <div className="row mt-3">
        <Routes>
          {/* <Route exact path="/" element={<CurrentHappenings/>}></Route> */}

          <Route
            exact
            path="/"
            element={<Home productList={productList} setProductList={setProductList} />}
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact
            path="/sales/:productId"
            element={<ProductDetails onUpdatedItem={handleItemUpdated}  />}
          ></Route>
          {/* <Route
            exact
            path="/sales/:orderId"
            element={<OrderDetails  />}
          ></Route> */}
          <Route
            exact
            path="/sales/:productId/order"
            element={<OrderDetails  orderList={orderList} setOrderList={setOrderList} />}
          ></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

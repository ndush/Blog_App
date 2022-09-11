import React  from "react";
import Product from './Product'
 import AddProduct from './AddProduct'
 


function Home({productList,setProductList}) {

  
//   const POSTS = () => {
//     fetch("https://sleepy-hamlet-81882.herokuapp.com/blogs")
//       .then((response) => response.json())
//       .then((products) => { console.log(products)
//        setProductList(products);
//       });
//   };

//   useEffect(
//     POSTS, []
//     );

  let products = productList.map((product) => (
    <Product
    image_url={product.image_url}
      productName={product.product_name}
      productQuantity={product.quantity}
      productId={product.id}
      key={product.id}
      setProductList={setProductList}
      productList={productList}
    />
  ))
  function handleAddNewProduct(product){
    setProductList([...productList,product])

  }
  return (
   
    <div className="container">
      <div className="row">{products}</div>
      <AddProduct handleAddNewProduct={handleAddNewProduct}/>
    </div>
    
  );
}
export default Home;

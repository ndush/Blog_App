import React from "react";
import { Link } from "react-router-dom";


function Product({productId,image_url, productName,  productList,setProductList}) {

    
  return (
    <div className="col">
      <div className="card h-100 create" style={{ width: 18 + "rem" }}>
        <img src={image_url} style={{ height: 200 + 'px', width: 286 + 'px' }} alt="" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          
          <Link to={"/sales/" + productId} className="btn btn-primary">
            View Details
          </Link>
        </div>
        <div className="card-footer">
        {/* <small className="text-muted">{productQuantity}</small> */}
          <button onClick={handleDelete}>delete</button>
            
        </div>
      </div>
     
    </div>
  );
}
export default Product;

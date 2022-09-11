import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditProduct from "./EditProduct";
import { Link } from "react-router-dom";



//const READ_POST = "https://sleepy-hamlet-81882.herokuapp.com/blogs"

export default function ProductDetails({onUpdatedItem,orderId}){

    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [supplier_name, setSupplierName] = useState("")
    const [unit_price, setUnitPrice] = useState("")

    let {productId} = useParams()
  
    console.log(productId)
    //const explore= READ_POST+blogId

    const VIEW_PRODUCT = () => {
        fetch(`http://localhost:9292/products/${productId}`)
         .then((response) => response.json())
            .then((sales) => {
               // const blog = blogs[0]

               setImage(sales.image_url)
               setTitle(sales.product_name)
                setDescription(sales.description)
                setUnitPrice(sales.unit_price)
                setSupplierName(sales.supplier_name)
      
            })
    }

    useEffect(
        VIEW_PRODUCT, []
    )

    
 return(
        <div className="container">
            <center>
                <img src={image} style={{height: 200 + 'px', width: 300 + 'px'}} />
                <h4>{title}</h4>
                <p>{description}</p>
                <h5>{supplier_name}</h5>
                <h5>{unit_price}</h5>
            </center>
            <center>
            <Link to={"/sales/"+ productId+"/order"} className="btn btn-primary">
            Place Order
          </Link>
            </center>
           
           
            <EditProduct onUpdatedItem={onUpdatedItem}/>
            
            
        </div>
    )

}
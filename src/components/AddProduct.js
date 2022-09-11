import React,{ useState} from 'react';


const AddProduct= ({handleAddNewProduct}) => {
   
    const [product_name, setProductName] = useState('');
    //const [quantity, setQuantity] = useState('');
    const [unit_price, setUnitPrice] = useState('');
    //const [supplier_name, setUnitSupplierName] = useState('');
    const [description, setDescription] = useState('');
    const [onUploadImage, setonUploadImage] = useState();
    //const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const sale = { 
            product_name:product_name,
            description:description,
            unit_price:unit_price,
            image_url :onUploadImage,
        };

        fetch('http://localhost:9292/products', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(sale)
        }) .then((response) => response.json())
        .then((product) => { 
            handleAddNewProduct(product);
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Product</h2>
            <form onSubmit={handleSubmit}>
            {/* <label>Upload Image:</label>
                <input
                type = "file"
                onChange={(e) => setonUploadImage(e.target.files)}
                /> */}
                <label>Image</label>
                    <input
                        className="form-control"
                        type="text"
                         name="image"
                        value={onUploadImage}
                        onChange={(e) =>  setonUploadImage(e.target.value)}
                        placeholder="Enter image url here..."/>
                
                <label>Product Title</label>
                <input 
                    type="text"
                    required
                    value={product_name}
                    onChange={(e) => setProductName(e.target.value)}
                />
                {/* <label>Product Quantity:</label>
                <input 
                    type="text"
                    required
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                /> */}
                <label>Product Price:</label>
                <input 
                    type="text"
                    required
                    value={unit_price}
                    onChange={(e) => setUnitPrice(e.target.value)}
                />
                {/* <label>Product Supplier:</label>
                <input 
                    type="text"
                    required
                    value={supplier_name}
                    onChange={(e) => setUnitSupplierName(e.target.value)}
                /> */}
                <label>Product description:</label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                {<button>Add Product</button>}
            </form>
        </div>
     );
}

export default AddProduct;
import React,{useState} from 'react'

const OrderProduct = ({handleAddNewOrder}) => {
    
    const [quantity, setQuantity] = useState('');
   

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = { 
          quantity:quantity,
        };

        

    return ( 
        <div className="create">
            <h2>Place an Order</h2>
            <form onSubmit={handleSubmit}>
               
                <input 
                    type="text"
                    required
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Enter quantity..."
                />
                {<button>submit</button>}
            </form>
        </div>
     );
}

export default OrderProduct
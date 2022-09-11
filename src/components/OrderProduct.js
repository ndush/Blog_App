import React,{useState} from 'react'

const OrderProduct = ({handleAddNewOrder}) => {
    
    const [quantity, setQuantity] = useState('');
   

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = { 
          quantity:quantity,
        };

        fetch('http://localhost:9292/orders', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(order)
        }) .then((response) => response.json())
        .then((order) => { console.log(order)
            handleAddNewOrder(order);
        })
    }

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
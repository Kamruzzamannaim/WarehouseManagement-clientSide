import { useRef } from "react";
import { useParams } from "react-router-dom";
import UseProducts from "../../hooks/UseProducts";
import "./Product.css";

const Product = () => {
  const { id } = useParams();

  const [products] = UseProducts();
  const product = products.filter((p) => p._id === id);
  const handleDelivered = (id) => {
    const newQuantiy = product[0]?.quantity - 1;
    const url = `http://localhost:5000/bike/${id}`;
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity: newQuantiy })
  };
  fetch(url, requestOptions)
      .then(response => response.json())
      .then(data =>console.log(data));
      window.location.reload();
  };
  const quantityRef=useRef(0);
  const handleRestore = id => {
  const quantity = quantityRef.current.value;
  const url = `http://localhost:5000/bike/${id}`;
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quantity: quantity })
};
fetch(url, requestOptions)
    .then(response => response.json())
    .then(data =>console.log(data));
    window.location.reload();
  
    
  };
  return (
    <div className="bike">
      <div className="bikeImg mx-auto w-50">
        <img src={product[0]?.img} alt="" />
      </div>
      <div className="bike-info text-center p-2">
        <h2 className="pt-3">{product[0]?.name}</h2>
        <p>{product[0]?.description}</p>
        <p>Price: {product[0]?.price}</p>
        <p>Quantity: {product[0]?.quantity}</p>
        {/* <p>Quantity: {quantity}</p> */}
      </div>
      <button className="d-flex mx-auto mt-3" onClick={() => handleDelivered(product[0]?._id)}>
        Delivered
      </button>
      <br />

      {/* <input type="text" placeholder="quantity number" />
      <button onClick={()=>handleRestore(product[0]?._id)}>Restore</button> */}
     
      <div className="d-flex mx-auto justify-content-center align-items-center p-3">
      <input type="number"placeholder="product quantity" name="quantity" className="mb-3 p-3" ref={quantityRef}/>
        <input className="btn btn-primary" type="submit" value="restore" onClick={()=>handleRestore(product[0]?._id)} />
      </div>
      
    </div>
  );
};

export default Product;

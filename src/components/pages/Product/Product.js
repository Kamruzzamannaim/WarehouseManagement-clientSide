import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import UseProducts from "../../hooks/UseProducts";
import "./Product.css";

const Product = () => {
  const { id } = useParams();
  const [products] = UseProducts();
  const product = products.filter((p) => p._id === id);
  // handle delivery
  const handleDelivered = (id) => {
    const newQuantity = product[0]?.quantity - 1;
    console.log(newQuantity);
    const url = `https://bike-web-server.herokuapp.com/bike/${id}`;

    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: newQuantity }),
    })
      .then((response) => response.json())
      .then((data) => window.location.reload());
    // window.location.reload();
  };
  const quantityRef = useRef(0);
  // handle restore
  const handleRestore = (id) => {
    const quantity = quantityRef.current.value;

    const url = `https://bike-web-server.herokuapp.com/bike/${id}`;

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: quantity }),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => window.location.reload());

    toast("product quantity updated");
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
      </div>
      <button
        className="d-flex mx-auto mt-3 btn btn-primary"
        onClick={() => handleDelivered(product[0]?._id)}
      >
        Delivered
      </button>
      <br />

      <div className="d-flex mx-auto justify-content-center align-items-center p-3">
        <input
          type="number"
          placeholder="product quantity"
          name="quantity"
          className="mb-3 p-3"
          ref={quantityRef}
        />
        <input
          className="btn btn-outline-primary"
          type="submit"
          value="restoke"
          onClick={() => handleRestore(product[0]?._id)}
        />
      </div>

      <Link className="text-decoration-none" to="/manage">
        <button className="d-flex mx-auto my-3 decoration-none btn btn-primary">
          Manage items
        </button>
      </Link>
    </div>
  );
};

export default Product;

import { useParams } from "react-router-dom";
import UseProducts from "../../hooks/UseProducts";

const Product = () => {
  const { id } = useParams();
  const theId = parseInt(id);

  const [products] = UseProducts([]);
  console.log(products);
  const product = products.filter((product) => product.id === theId);
  const handleDelivered=()=>{
    
  }
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
      <button onClick={handleDelivered}>Delivered</button>
    </div>
  );
};

export default Product;

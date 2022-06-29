import { Link } from "react-router-dom";
import UseProducts from "../hooks/UseProducts";
import "./Manage.css";

import ManageProduct from "./ManageProduct/ManageProduct";

const Manage = () => {
  const [products, setProducts] = UseProducts();

  // console.log(products.length);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/bike/${id}`;
    const confirm= window.confirm('do you want to delete?');
    if(confirm){
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const newProducts = products.filter((product) => product._id !== id);
          setProducts(newProducts);
        });
        
    }
   
  };

  return (
    <div>
      <Link className="text-decoration-none" to="/addNewItem">
        <button className="d-flex mx-auto my-3 decoration-none btn btn-primary">
          Add new items
        </button>
      </Link>
      <div className="products">
        {products.map((bike) => (
          <ManageProduct
            key={bike._id}
            bike={bike}
            handleDelete={handleDelete}
          ></ManageProduct>
        ))}
      </div>
    </div>
  );
};

export default Manage;

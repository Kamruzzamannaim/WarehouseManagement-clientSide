import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import UseProducts from "../hooks/UseProducts";
import "./Manage.css";

import ManageProduct from "./ManageProduct/ManageProduct";

const Manage = () => {
  const [products, setProducts] = UseProducts();
  const handleDelete = (id) => {
    const url = `https://bike-web-server.herokuapp.com/bike/${id}`;
    const confirm = window.confirm("do you want to delete?");
    if (confirm) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const newProducts = products.filter((product) => product._id !== id);
          setProducts(newProducts);
        });
        toast('item deleted')
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

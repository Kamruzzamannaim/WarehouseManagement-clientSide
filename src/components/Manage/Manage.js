import UseProducts from "../hooks/UseProducts";
import "./Manage.css";

import ManageProduct from "./ManageProduct/ManageProduct";

const Manage = () => {
  const [products, setProducts] = UseProducts();

  // console.log(products.length);

  const handleDelete = (id) => {
    console.log(id);
    const url = `http://localhost:5000/bike/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newProducts = products.filter((product) => product._id !== id);
        setProducts(newProducts);
      });
  };

  return (
    <div className="products">
      {products.map((bike) => (
        <ManageProduct
          key={bike._id}
          bike={bike}
          handleDelete={handleDelete}
        ></ManageProduct>
      ))}
    </div>
  );
};

export default Manage;

import { useAuthState } from "react-firebase-hooks/auth";
import UseProducts from "../hooks/UseProducts";

import { toast } from "react-toastify";
import auth from "../../firebase.init";
import ManageProduct from "../Manage/ManageProduct/ManageProduct";
import "./MyItems.css";

const MyItem = () => {
  const [products, setProducts] = UseProducts();
  const [user] = useAuthState(auth);

  const myItems = products.filter((product) => product.email === user?.email);
  console.log(myItems);
  const handleDelete = (id) => {
    const url = `https://bike-web-server.herokuapp.com/bike/${id}`;
    const confirm = window.confirm("do you want to delete?");
    if (confirm) {
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
    toast("item deleted");
  };
  return (
    <div className="text-center">
      <h1 className="py-3">My items</h1>
      <div className="myItems">
        {myItems.map((bike) => (
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

export default MyItem;

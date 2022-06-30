import { useAuthState } from 'react-firebase-hooks/auth';
import UseProducts from "../hooks/UseProducts";

import auth from '../../firebase.init';
import ManageProduct from '../Manage/ManageProduct/ManageProduct';

const MyItem = () => {
    const [products,setProducts]=UseProducts();
    const [user] = useAuthState(auth);

    const myItems = products.filter(product=>product.email===user?.email);
    console.log(myItems);
    const handleDelete = (id) => {
        const url = `https://bike-web-server.herokuapp.com/bike/${id}`;
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
            <h1>my item</h1>
            {myItems.map((bike) => (
          <ManageProduct
            key={bike._id}
            bike={bike}
            handleDelete={handleDelete}
          ></ManageProduct>
        ))}

        </div>
    );
};

export default MyItem;
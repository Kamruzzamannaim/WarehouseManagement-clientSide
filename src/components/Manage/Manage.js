import UseProducts from '../hooks/UseProducts';
import './Manage.css';

import ManageProduct from './ManageProduct/ManageProduct';


const Manage = () => {
    const[products]=UseProducts();
    console.log(products.length);
    return (
        <div className='products'>
          {
            products.map(bike=><ManageProduct key={bike.id} bike={bike}></ManageProduct>)
          }
        </div>
    );
};

export default Manage;
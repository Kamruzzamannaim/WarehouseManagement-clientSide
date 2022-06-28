import UseProducts from '../../hooks/UseProducts';
import Bike from '../Bike/Bike';
import './Bikes.css';

const Bikes = () => {
//     const [bikes,setBikes]=useState([])
//     useEffect(()=>{
// fetch('product.json')
// .then(res=>res.json())
// .then(data=>setBikes(data));
//     },[])
const [bikes]=UseProducts();
    return (
        <div>
            <h1 className='text-center py-5'>Bikes</h1>
           <div className="bikes">
          
           {
              bikes.map(bike=><Bike key={bike.id} bike={bike}></Bike>)
            }
           </div>
        </div>
    );
};

export default Bikes;
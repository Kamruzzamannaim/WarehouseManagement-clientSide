import './Bike.css';
const Bike = ({bike}) => {
  const  {name,img,description,price,quantity}=bike;
    return (
        <div className='bike'>
            
            <div className="bikeImg mx-auto">
            <img src={img} alt="" />
            </div>
           <div className="bike-info text-center">
           <h2 className='pt-3'>{name}</h2>
            <p>{description}</p>
            <small>Price: {price}</small>
           <p>Quantity: {quantity}</p>
           </div>
        </div>
    );
};

export default Bike;
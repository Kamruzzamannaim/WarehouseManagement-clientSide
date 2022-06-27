import './Bike.css';
const Bike = ({bike}) => {
  const  {name,img,description,price,quantity,id}=bike;
  const handleUpdate=(id)=>{
    console.log(id);
  
  }
    return (
        <div className='bike'>
            
            <div className="bikeImg mx-auto">
            <img src={img} alt="" />
            </div>
           <div className="bike-info text-center p-2">
           <h2 className='pt-3'>{name}</h2>
            <p>{description}</p>
            <p>Price: {price}</p>
           <p>Quantity: {quantity}</p>
           <button type="button" className="btn btn-outline-primary  "onClick={()=>handleUpdate(id)}>Update</button>
           </div>
        </div>
    );
};

export default Bike;
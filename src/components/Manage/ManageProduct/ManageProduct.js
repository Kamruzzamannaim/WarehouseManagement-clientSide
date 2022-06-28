import './ManageProduct.css';
const ManageProduct = ({bike}) => {
    const  {name,img, quantity,id}=bike;
    const handleDelete=(id)=>{

    }
    return (
        <div>
         <h2>{name}</h2>
         <div className="product-img ">
            <img src={img} alt="" /></div>  
           <p className='info'> Quantity: {quantity}</p> 
           <p> <button onClick={()=>handleDelete(id)} className="btn info btn-lg btn-primary ">Delete</button></p>
        </div>
    );
};

export default ManageProduct;
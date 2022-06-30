import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const AddNewItem = () => {
    const [user] = useAuthState(auth);
    const email=(user?.email);
    const handleForm=(event)=>{
        event.preventDefault();
        const name= event.target.name.value;
        const img= event.target.imageUrl.value;
        const price= event.target.price.value;
        const quantity= event.target.quantity.value;
        const supplier= event.target.supplier.value;
        const description=event.target.description.value;
        console.log(name,img,price,quantity,supplier,description,email);
        const newItem={name,img,price,quantity,supplier,description,email};
        fetch('http://localhost:5000/bike',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newItem)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        
}
   
    return (
        <div>
             <h2 className="text-center mt-4">Add new user</h2>
            <form onSubmit={handleForm} className="d-flex flex-column w-50 m-auto">
                <input type="text"placeholder="product name" name="name" className="mb-3"/>
                <input type="text"placeholder="image URL" name="imageUrl" className="mb-3"/>
                <input type="text"placeholder="price" name="price" className="mb-3"/>
                <input type="number"placeholder="product quantity" name="quantity" className="mb-3"/>
                <input type="text"placeholder="supplier name" name="supplier" className="mb-3"/>
                <textarea name="description" placeholder="description" id="" cols="30" rows="10"></textarea>
                <input type="submit" className="my-3 btn btn-primary " value="Submit" />
                
                
            </form>
        </div>
    );
};

export default AddNewItem;
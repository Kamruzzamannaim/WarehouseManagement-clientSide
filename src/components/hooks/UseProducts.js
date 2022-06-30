import { useEffect, useState } from 'react';

const UseProducts = () => {
  
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://bike-web-server.herokuapp.com/bikes')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return [products, setProducts]
};

export default UseProducts;
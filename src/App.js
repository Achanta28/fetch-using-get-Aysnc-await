
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [products,setProducts] = useState([])

  let getProductsFromServer = async()=>{

    let reqOtions = {
      method:"GET",
     
    }
    let JSONData =await fetch("https://fakestoreapi.com/products",reqOtions)
    
   let  JSOData =await JSONData.json();
   setProducts(JSOData)
    console.log(JSOData)
    


  }
  useEffect(()=>{
    getProductsFromServer();
    

  },[])
  
  
  return (
    <div className="App">
     <button type='button' onClick={()=>{

      
getProductsFromServer();

    


     }}>GetProducts</button>
     <div className='productContainer'>
     {
      products.map((ele,i)=>{
        return(
          <div className='productDiv'>
            <img src={ele.image} className='productPic'></img>
            <p>{ele.title}</p>
            <p>Price:₹{ele.price}</p>

          </div>
          
        )

      })
     }
     </div>
    
      
    </div>
  );
}

export default App;

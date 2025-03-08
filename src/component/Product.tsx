import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { IProduct } from "@/interface";
import Searchbox from "./Searchbox";
import CheckCart from "./checkCart";
const Products = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [cartItems, setCartItems] = useState<IProduct[]>([]);
    const [isSeeCart, setisSeeCart] = useState<boolean>(false);
    

    
    useEffect(() => {
        try {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => {
                    setProducts(data)
                })
            console.log(Products)
        } catch (err) {
            console.error(err);
        }
    }, [])
    
    // const isOnline= window.navigator.onLine;

    // if( Products.length= isOnline       ){

    // }else{
    //     <main>
    //         <img src="/bouncing-circles.svg" alt="" className="w-[15em]"/>
    //         <p>Poor Internet Connection...</p>
    //     </main>
    // }

     function addToCart(product: IProduct){
      const cartItem = ([...cartItems,product])
        setCartItems([...cartItems,product])
        console.log (cartItem);
    };
        localStorage.setItem("addToCart",addToCart.toString());
        
    return (

        <main className="p-4 bg-[lightblue]">
             
            <Searchbox/>            
                <div className="grid grid-cols-2 ml-[49em] mb-[2em]">
                    <div className="grid grid-cols-2">
                        <div><img src="/cart.jpeg" alt="" className="border rounded-[5px] mr-[1em]"/></div>
                        <div>Cart Items:{cartItems.length}</div>
                    </div>
                    
                    <button onClick={()=> setisSeeCart(true)}>See cart</button>
                  <div>
                    {isSeeCart &&
                        <CheckCart cartItems={cartItems} closeCart={()=>setisSeeCart(false)}/>
                                            
                    }
                    </div> 
         
          </div>
            <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 gap-y-3 gap-x-6 md:grid md:grid-cols-4">
            { products.length && products.map((product) => (
                <ProductCard product={product} handleAddToCart={addToCart}/>
            ))
        }     
            </div>

        </main>
    );
};


export default Products;
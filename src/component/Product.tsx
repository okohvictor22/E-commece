import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { IProduct } from "@/interface";
import Searchbox from "./Searchbox";
import CheckCart from "./checkCart";

type IProductWithQuantity = IProduct & { quantity: number };

const Products = () => {

    const [products,setProducts] = useState<IProduct[]>([]);
    const [cartItems, setCartItems] = useState<IProductWithQuantity[]>([]);
    const [isSeeCart, setisSeeCart] = useState<boolean>(false);
    const [filteredProducts,setfilteredProducts] = useState<IProduct[]>([])

    
    useEffect(() => {
        try {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => {
                    setProducts(data)
                    setfilteredProducts(data)
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


    const addToCart = (product: IProduct) => {
        setCartItems((prevCart) => {
          const existingItem = prevCart.find((item) => item.id === product.id);
      
          if (existingItem) {
           
            return prevCart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
          
            return [...prevCart, { ...product, quantity: 1 }];
          }
        });
      };
      

    return (
 
        <main className="p-4 bg-[lightgray]">
            <div className="grid grid-cols-2 fixed bg-[lightgray] top-0 w-full h-max">
                <Searchbox products={products} setProducts={setfilteredProducts}/>            
                <div className="grid grid-cols-2 justify-self-end w-max pr-2">
                    <div className="grid items-center"><img src="/cart.jpeg" alt="" className="w-[50px] border rounded-[5px] mr-[1em]"/></div>
                    <button onClick={()=> setisSeeCart(!isSeeCart)} className="mr-[15px]"> cartItems:{cartItems.length}</button>
                </div>
            </div>
                    
                    
            <div className="sm:grid sm:grid-cols-2 gap-y-5 gap-x-2 md:grid md:grid-cols-4 p-2 mt-[4em]">
                { filteredProducts.length && filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} handleAddToCart={addToCart}/>
                ))
                }     
            </div>

           {isSeeCart &&
                <CheckCart cartItems={cartItems}/>                           
            }
        </main>
    );
};


export default Products;
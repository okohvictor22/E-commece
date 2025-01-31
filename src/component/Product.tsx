import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { IProduct } from "@/interface";



const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [cartItem, setCartItem] = useState<number>(0);
    console.log(products);

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

    // if( products.length = isOnline       ){

    // }else{
    //     <div><p>Poor Internet Connection...</p></div>
    // }


    return (

        <main className="p-4">
            <img src="/bouncing-circles.svg" alt="" className="w-[1px]"/>            
                <div className="ml-[2em] mt-[1em]">Cart Items: {cartItem}</div>
                
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 md:grid md:grid-cols-4">
            { products.length && products.map((product) => (
                <ProductCard product={product} handleAddToCart={()=>setCartItem(cartItem+1)}/>
            ))
        }     
            </div>

        </main>
    );
};

export default Products;
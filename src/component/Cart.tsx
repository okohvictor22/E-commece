import { useState,useEffect } from "react";
import { IProduct } from "@/interface";
const Cart = ()=>{
    const [products] = useState<IProduct[]>([]);
        
            useEffect(() => {
                try {
                    fetch('https://dummyjson.com/carts')
                    .then(res => res.json())
                    .then(console.log);
                } catch (err) {
                    console.error(err);
                }
            }, [products]) 
    return(
        <div>

        </div>
    )
}
export default Cart;
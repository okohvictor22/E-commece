import { IProduct } from "@/interface";
import { useState } from "react";
import ProductCard from "./ProductCard";

type CartItemProps ={
    addToCart:IProduct
    handleAddToCart:(addToCart:IProduct)=>void;
}

const checkCart : React.FC<CartItemProps> = ({addToCart,handleAddToCart}) => {
    const [cartItems] = useState<IProduct[]>([]);
    console.log(cartItems);
    const cart = () => {
        handleAddToCart(addToCart);
        console.log(cart);
    };
    return(
        <main>
        <div>
            { cartItems.length && cartItems.map((cartItems: IProduct) => (
                <ProductCard product={cartItems} handleAddToCart={cart}/>
            ))
        }     
        </div>
        <a href="SignIn">
            <button>check out</button>
        </a>
        </main>
    );
};
      export default checkCart;
            
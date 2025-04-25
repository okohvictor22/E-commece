import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { IProduct } from "@/interface";
import Searchbox from "./Searchbox";
import CheckCart from "./checkCart";
import SecondDrop from "./SecondDrop";

type IProductWithQuantity = IProduct & { quantity: number };

const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [cartItems, setCartItems] = useState<IProductWithQuantity[]>([]);
    const [isSeeCart, setIsSeeCart] = useState<boolean>(false);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);  // Add loading state

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);  // Set loading to false once the data is fetched
            }
        };

        fetchProducts();
    }, []);

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
                <Searchbox products={products} setProducts={setFilteredProducts} />            
                <div className="grid grid-cols-2 justify-self-end w-max pr-2">
                    <div className="grid items-center">
                        <img src="/cart.jpeg" alt="Cart" className="w-[50px] border rounded-[5px] mr-[1em]" />
                    </div>
                    <button onClick={() => setIsSeeCart(!isSeeCart)} className="mr-[15px]">
                        Cart Items: {cartItems.length}
                    </button>
                </div>
            </div>
            
            {/* Conditionally Render Loading or Products */}
            {loading ? (
                <div className="flex justify-center items-center h-[70vh]">
                    <p>Loading...</p>
                </div>
            ) : (
                <div className="sm:grid sm:grid-cols-2 gap-y-5 gap-x-2 md:grid md:grid-cols-4 p-2 mt-[4em]">
                    {filteredProducts.length && filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} handleAddToCart={addToCart} />
                    ))}
                </div>
            )}

            {isSeeCart && <CheckCart cartItems={cartItems} />}
            <SecondDrop />
        </main>
    );
};

export default Products;

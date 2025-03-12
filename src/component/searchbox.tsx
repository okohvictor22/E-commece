import { IProduct } from "@/interface";
import { useState,useEffect, SetStateAction, Dispatch } from "react";

type SearchboxProps = {
    products:IProduct[];
    setProducts:  Dispatch<SetStateAction<IProduct[]>>;
}

const Searchbox:React.FC<SearchboxProps> = ({products, setProducts}) =>{
    const[searchQuery,setSearchQuery] = useState("");
    console.log(products);
    useEffect(()=>{

        const filtered = products.filter((product: IProduct) =>
            product.title.toLowerCase().includes(searchQuery?.toLowerCase() || "")
          );
          setProducts(filtered);
    
    },[searchQuery]);
    
    return(
        <div>
          <input
           type="text" 
           placeholder="search products..."
           value={searchQuery}
           onChange={(e) =>
           setSearchQuery(e.target.value)}
           />
        </div>
            
    );
};
   export default Searchbox; 
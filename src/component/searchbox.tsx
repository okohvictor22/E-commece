// import { useState,useEffect, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";

// const Searchbox = ({products}) =>{
//     const[searchQuery,setSearchQuery] = useState("");
//     const [filteredProducts,setFilteredProducts] = useState(products);
    

//     useEffect(()=>{
//       const filtered =products.filter((product: { name: { toLowerCase: () => (() => string)[]; }; })=>product.name.toLowerCase().includes(searchQuery.toLowerCase)
//     );
//     setFilteredProducts(filtered);
//     },[searchQuery,products]);
    
//     return(
//         <div>
//           <input
//            type="text" 
//            placeholder="search products..."
//            value={searchQuery}
//            onChange={(e) =>
//            setSearchQuery(e.target.value)}
//            />

//            {filteredProducts.length>0 ? (
//             <ul>
//               {filteredProducts.map((product: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; })=>(
//                 <li key={product.id}>{product.name}</li>
//               ))}
//             </ul>
//            ):(
//             <p>No Product Found.</p>
//            )}
//         </div>
            
//     );
// };
//    export default Searchbox; 
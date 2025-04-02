import { useState } from "react";
import { IProduct } from "@/interface";
import { Bounce, toast, ToastContainer } from "react-toastify";

interface AdminProductsProps {
  products: IProduct[];
  setProducts: (updatedProducts: IProduct[]) => void;
}

const toastOptions:any = {
  position:"top-right",
  autoClose:5000,
  hideProgressBar:false,
  newestOnTop:false,
  closeOnClick:false,
  rtl:false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: "dark",
  transition:Bounce,
}

const AdminProducts: React.FC<AdminProductsProps> = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({ title: "", price: 0 });

 
  const notify = (displayText: string, type:'success' | 'error') => toast(displayText, {...toastOptions, type});

  const handleAddProduct = async () => {
    if (!newProduct.title || !newProduct.price) {
      alert("Please enter all fields");
      return;
    }
  
    console.log("Adding Product:", newProduct);
  
    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
  
      console.log("Response Status:", response.status); 
      if (!response.ok) {
        throw new Error("Failed to add product");
      }
  
      const data: IProduct = await response.json();
      console.log("API Response Data:", data); 
      // setProducts((prev: IProduct[]) => {
      //   const updatedProducts = [...prev, data];
      //   console.log("Updated Products:", updatedProducts); 
      //   return updatedProducts;
      // });
  
      notify("Product successfully created!", 'success');
  
      setNewProduct({ title: "", price: 0 }); 
    } catch (error) {
      notify("Failed to add product", 'error');
      console.error("Error:", error);
    }
  };

  return (
    <main>
    <ToastContainer  />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Manage Products</h2>
      
      <div className="mb-4">
        <input
            type="string"
            placeholder="Title"
            className="border p-2 mr-2"
            onChange={(e) => {
            setNewProduct((prev) => {
            const updated = { ...prev, title: e.target.value };
            console.log("Updated state:", updated);
            return updated;
          });
        }}
        
        />
        <input
          type="number"
          placeholder="Price"
          className="border p-2 mr-2"
          value={newProduct.price}
          onChange={(e) => {
            console.log("Price changed:", e.target.value);
            setNewProduct({ ...newProduct, price: Number(e.target.value) });
          }}
        />
        <button onClick={handleAddProduct}>
          Add Product
        </button>
      </div>

      <ul>
        {products.map((product) => (
          <li key={product.id} className="border p-2 flex justify-between items-center">
            <span>{product.title} - ${product.price}</span>
            <div>
              <button className="bg-blue-500 text-white px-2 py-1 mr-2">Edit</button>
              <button className="bg-red-500 text-white px-2 py-1">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
   </main>
  );

} 
export default AdminProducts;
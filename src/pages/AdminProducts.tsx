import { useState } from "react";
import { IProduct } from "@/interface";
import { Bounce, toast, ToastContainer } from "react-toastify";
import FourthDrop from "@/component/FourthDrop";

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

const AdminProducts: React.FC<AdminProductsProps> = ({ products}) => {
  const [newProduct, setNewProduct] = useState({ title: "", price: 0 });
  const [editedProduct, setEditedProduct] = useState<Partial<IProduct>>({});
  const [deletedProduct, setdeletedProduct] = useState<Partial<IProduct>>({});
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setisEditing] = useState(false);
  const [isdeleting, setisdeleting] = useState (false);
  const notify = (displayText: string, type:'success' | 'error') => toast(displayText, {...toastOptions, type});

  const handleAddProduct = async () => {
    setIsAdding(true);
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
    }finally {
      setIsAdding(false);
    }
  };
  
  const handleSaveClick = async () => {
    try {
      fetch('https://fakestoreapi.com/products/1', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedProduct)
      })
        .then(response => response.json())
        .then(data => console.log(data));
        toast.success("Product edited successfully!", { transition: Bounce });
      }catch (err) {
        toast.error("Failed to edit product.");
        }finally {
          setisEditing(false);
        }
      };

  const handleDelete = async () => {
    try {
      fetch('https://fakestoreapi.com/products/1', {
        method: 'DELETE'
      })
        .then(response => response.json())
        .then(data => console.log(data));
        toast.success("Product deleted successfully!", { transition: Bounce });
      }catch (err) {
        toast.error("Failed to delete product.");
        }finally {
          setisdeleting(false);
        }
      };

  return (
    <main>
      <FourthDrop/>
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
    
          <button
            onClick={handleAddProduct}
            className="bg-green-500 text-white px-4 py-2"
            disabled={isAdding}
          >
            Add Product
          </button>
          {isAdding && (
            <span className="loader w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
          )}

      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="border p-2 flex justify-between items-center">
            <span>{product.title} - ${product.price}</span>
            <div>
              
            </div>
          </li>
        ))}
      </ul>
    </div>

    <input
    type="string"
    placeholder="Title"
    className="border p-2 mr-2"
    onChange={(e) => {
      setEditedProduct((prev) => {
    const edited = { ...prev, title: e.target.value };
    console.log("edited state:", edited);
    return edited;
  });
}}
   /> 
   <input
          type="string"
          placeholder="id"
          className="border p-2 mr-2 ml-[16px]"
          value={editedProduct.price}
          onChange={(e) => {
            console.log("Price changed:", e.target.value);
            setEditedProduct({ ...editedProduct, price: String(e.target.value) });
          }}
        />
      <button
           onClick={handleSaveClick}
            className="bg-green-500 text-white px-4 py-2"
            disabled={isEditing}
          >
           Edit Product
          </button>
          {isEditing && (
            <span className="loader w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
          )}
          <br />

        <input
          type="string"
          placeholder="Title"
          className="border p-2 mr-2 mt-[16px] ml-[16px]"
          onChange={(e) => {
            setdeletedProduct((prev) => {
          const deleted = { ...prev, title: e.target.value };
          console.log("deleted state:", deleted);
          return deleted;
          });
            }}
        /> 

        <input
          type="string"
          placeholder="id"
          className="border p-2 mr-2"
          value={deletedProduct.price}
          onChange={(e) => {
            console.log("Price changed:", e.target.value);
            setdeletedProduct({ ...deletedProduct, price: String(e.target.value) });
          }}
        />

<button
           onClick={handleDelete}
            className="bg-green-500 text-white px-4 py-2"
            disabled={isdeleting}
          >
           Delete Product
          </button>
          {isdeleting && (
            <span className="loader w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
          )}
   </main>
  );

} 
export default AdminProducts;
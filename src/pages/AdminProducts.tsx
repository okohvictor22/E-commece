import { useState } from "react";
import { IProduct } from "@/interface";
interface AdminProductsProps {
    products: IProduct[];
    setProducts: (updatedProducts: IProduct[]) => void; 
  }
  
const AdminProducts: React.FC<AdminProductsProps> = ({ products, setProducts }) => {
    const [newProduct, setNewProduct] = useState<IProduct>({
        id: "", 
        title: "",
        price: 0,
        image: "",
        description: "", 
      });
  const handleAddProduct = () => {
    if (!newProduct.title || !newProduct.price) {
      return alert("Please enter all fields");
    }
  
    const newProductData: IProduct = {
      ...newProduct,
      id: crypto.randomUUID()
    };
    console.log(crypto.randomUUID());
  
    setProducts([...products, newProductData]); 
  
    setNewProduct({
            id: "",
            title: "",
            price:0, 
            image: "",
            description: "",
          });
        };
  

  const handleDelete = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Manage Products</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={newProduct.title}
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="border p-2 mr-2"
        />
        <button onClick={handleAddProduct} className="bg-green-500 text-white px-4 py-2">
          Add Product
        </button>
      </div>

  
      <ul>
        {products.map((product) => (
          <li key={product.id} className="border p-2 flex justify-between items-center">
            <span>{product.title} - ${product.price}</span>
            <div>
              <button className="bg-blue-500 text-white px-2 py-1 mr-2">Edit</button>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white px-2 py-1"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminProducts;

import { useState } from "react";
import { IProduct } from "@/interface";
import { Bounce, toast, ToastContainer } from "react-toastify";
import FourthDrop from "@/component/FourthDrop";

interface AdminProductsProps {
  products: IProduct[];
  setProducts: (updatedProducts: IProduct[]) => void;
}

const toastOptions: any = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: false,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: "dark",
  transition: Bounce,
};

const AdminProducts: React.FC<AdminProductsProps> = ({ products }) => {
  const [newProduct, setNewProduct] = useState({ title: "", price: 0 });
  const [editedProduct, setEditedProduct] = useState<Partial<IProduct>>({});
  const [deletedProduct, setdeletedProduct] = useState<Partial<IProduct>>({});
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setisEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const notify = (displayText: string, type: "success" | "error") => toast(displayText, { ...toastOptions, type });

  const handleAddProduct = async () => {
    setIsAdding(true);
    if (!newProduct.title || !newProduct.price) {
      alert("Please enter all fields");
      return;
    }

    console.log("Adding Product:", newProduct);

    try {
      const response = await fetch("https://fakestoreapi.com/products", {
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

      notify("Product successfully created!", "success");

      setNewProduct({ title: "", price: 0 });
    } catch (error) {
      notify("Failed to add product", "error");
      console.error("Error:", error);
    } finally {
      setIsAdding(false);
    }
  };

  const handleSaveClick = async () => {
    try {
      fetch("https://fakestoreapi.com/products/1", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedProduct),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
      toast.success("Product edited successfully!", { transition: Bounce });
    } catch (err) {
      toast.error("Failed to edit product.");
    } finally {
      setisEditing(false);
    }
  };

  const handleDelete = async () => {
    try {
      fetch("https://fakestoreapi.com/products/1", {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
      toast.success("Product deleted successfully!", { transition: Bounce });
    } catch (err) {
      toast.error("Failed to delete product.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <main className="p-8 max-w-7xl mx-auto">
      <FourthDrop />
      <ToastContainer />
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Manage Products</h2>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          <input
            type="text"
            placeholder="Title"
            className="border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
            className="border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={newProduct.price}
            onChange={(e) => {
              console.log("Price changed:", e.target.value);
              setNewProduct({ ...newProduct, price: Number(e.target.value) });
            }}
          />
          <button
            onClick={handleAddProduct}
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300"
            disabled={isAdding}
          >
            Add Product
          </button>
          {isAdding && (
            <span className="loader w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
          )}
        </div>

        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.id} className="flex justify-between items-center border p-4 rounded-md bg-white shadow-md hover:bg-gray-50">
              <span className="text-lg">{product.title} - ${product.price}</span>
              <div className="flex space-x-4">
                <button
                  onClick={handleSaveClick}
                  className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
                  disabled={isEditing}
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition duration-300"
                  disabled={isDeleting}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Edit Section */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Edit Product</h3>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            placeholder="Title"
            className="border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => {
              setEditedProduct((prev) => {
                const edited = { ...prev, title: e.target.value };
                console.log("Edited state:", edited);
                return edited;
              });
            }}
          />
          <input
            type="text"
            placeholder="Product ID"
            className="border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => {
              setEditedProduct({ ...editedProduct, price: String(e.target.value) });
            }}
          />
          <button
            onClick={handleSaveClick}
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
            disabled={isEditing}
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Delete Section */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Delete Product</h3>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            placeholder="Title"
            className="border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => {
              setdeletedProduct((prev) => {
                const deleted = { ...prev, title: e.target.value };
                console.log("Deleted state:", deleted);
                return deleted;
              });
            }}
          />
          <input
            type="text"
            placeholder="Product ID"
            className="border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => {
              setdeletedProduct({ ...deletedProduct, price: String(e.target.value) });
            }}
          />
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition duration-300"
            disabled={isDeleting}
          >
            Delete Product
          </button>
        </div>
      </div>
    </main>
  );
};

export default AdminProducts;

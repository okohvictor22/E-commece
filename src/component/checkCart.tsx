import { IProduct } from "@/interface";

type IProductWithQuantity = IProduct & { quantity: number };

type CheckCartProps = {
  cartItems: IProductWithQuantity[];
};

const CheckCart: React.FC<CheckCartProps> = ({ cartItems }) => {
  // Calculate total price
  const total = cartItems.reduce(
    (acc, item) => acc + (Number(item.price) || 0) * item.quantity,
    0
  );
  

  return (
    <main className="absolute top-16 right-4 w-[350px] bg-white max-h-[400px] overflow-y-auto p-4 border border-gray-300 shadow-lg rounded-lg z-40">
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((cartItem) => (
            <div key={cartItem.id} className="flex items-center gap-4 mb-4 border-b pb-2">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                className="w-12 h-16 object-cover rounded-md border"
              />
              <div className="flex-1">
                <p className="font-medium text-sm truncate">{cartItem.title}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-gray-700 font-semibold text-sm">
                    ${cartItem.price}
                  </span>
                  <span className="text-sm text-gray-600">x{cartItem.quantity}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Total Price Section */}
          <div className="flex justify-between items-center mt-4 pt-4 border-t font-semibold text-lg">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-center py-8">No items in cart</p>
      )}
    </main>
  );
};

export default CheckCart;

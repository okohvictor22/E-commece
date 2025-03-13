import { IProduct } from "@/interface"


type IProductWithQuantity = IProduct & { quantity: number };

type CheckCartProps ={
  cartItems: IProductWithQuantity[];
}
 
const CheckCart:React.FC<CheckCartProps>  = ({cartItems}) => {
  


    return(
<main className="absolute top-[4em] w-max right-0 bg-[whitesmoke] max-h-[400px] overflow-y-scroll p-4 border border-black shadow z-40">
      <div>
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <div key={cartItem.id} className="grid grid-cols-4 mb-[15px]">
              
              <div className="w-[3em] h-[4em] mt-[7px]">
                <img src={cartItem.image}  className="w-full h-full object-cover" />
              </div>

              
              <div>
                <p className="mt-[20px]">{cartItem.title}</p>
              </div>

              
              <div>
                <p className="mt-[20px] ml-[25px]">${cartItem.price}</p>
              </div>

              
              <div>
                <p className="mt-[20px]">x{cartItem.quantity}</p> 
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No items in cart</p>
        )}
      </div>
    </main>
    )
}
export default CheckCart;
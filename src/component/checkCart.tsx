import { IProduct } from "@/interface"
type CheckCartProps ={
    cartItems:IProduct[]
    closeCart:()=>void;
}
 
const CheckCart:React.FC<CheckCartProps>  = ({cartItems, closeCart}) => {


    return(
        <main>

      <div>

        {cartItems.length && cartItems.map((cartItem)=>
        <div className="absolute right-4 grid grid-cols-[1fr_4fr] bg-[green] mt-[15px]">
                
          <div>
          <p>
               <img src={cartItem.image} alt="" className="w-[3em] h-[4em]"/>
            </p>
          </div>

           <div>
           <p>
                {cartItem.title}
            </p>

            <p>
            {cartItem.price}
            </p>
           </div>
        </div>  
        )}
       
      </div>
      <div className=" border rounded-[15px] bg-[blue] w-[6em] h-[2em] pl-[9px]">
        <button onClick={closeCart}>check out</button>
      </div>
      </main>
    )
}
export default CheckCart;
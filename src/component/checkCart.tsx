import { IProduct } from "@/interface"
type CheckCartProps ={
    cartItems:IProduct[]
}
 
const CheckCart:React.FC<CheckCartProps>  = ({cartItems}) => {


    return(
        <main  className="absolute top-[4em] w-max right-0 bg-[whitesmoke] max-h-[400px] overflow-y-scroll p-4 border border-black shadow">

      <div>

        {cartItems.length && cartItems.map((cartItem)=>
        <div className="grid grid-cols-3 mb-[15px] z-index:40;">
                
          <div className="w-[3em] h-[4em] mt-[7px]">
            <p>
              <img src={cartItem.image} alt=""/>
            </p>
          </div>

          <div>
            <p>
              {cartItem.title}
            </p>
          </div>

          <div>
            <p className=" mt-[20px] ml-[70px]">
              {cartItem.price}
            </p>
          </div>
        </div>  
        )}
       
      </div>

      
      </main>
    )
}
export default CheckCart;
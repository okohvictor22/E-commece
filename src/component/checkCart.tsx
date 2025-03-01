import { IProduct } from "@/interface"

type CheckCartProps ={
    cartItems:IProduct
    handleAddToCart:(cartItems:IProduct) => void
}
 
const CheckCart:React.FC<CheckCartProps>  = ({cartItems,handleAddToCart}) => {



    return(
      <div>
        <a href="SignIn"><button onClick={()=> handleAddToCart(cartItems)}>check out</button></a>
      </div>
    )
}
export default CheckCart;
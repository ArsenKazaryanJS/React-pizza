import { ShoppingCart, Trash2 } from "lucide-react"
import { removeItems } from "../../redux/slices/cartSlice"
import { useDispatch } from "react-redux"

export const CartHead = () => {
    const dispatch = useDispatch()
    return (
           <div className="cart-head">
         <div className="cart-head-title">
           <ShoppingCart />
           <h2>Корзина</h2>
         </div>
         <div className="cart-head-tarsh">
             <button onClick={() => dispatch(removeItems())}>
             <Trash2 />
             <p>Очистить корзину</p>
             </button>
         </div>
             </div>
    )
}

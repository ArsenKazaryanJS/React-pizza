import { ArrowLeft, ShoppingCart } from "lucide-react"
import './cartEmpty.css'
import { useNavigate } from "react-router"

export const CartEmpty = () => {
    const navigate = useNavigate()
    return (
        <div className="emptCart-container"> 
            <div className="emptCart-box">
            <ShoppingCart className="emptCart-icon"/>
            <h2>Корзина пустая 😕</h2>
            <p>Вероятней всего, вы не заказывали ещё пиццу. <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
         <div className="emptyCart-btn-box">
         <button onClick={()=>navigate(-1)}><ArrowLeft />Вернуться назад</button>
         </div>
            </div>
        </div>
    )
}

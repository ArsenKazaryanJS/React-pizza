import {MoveLeft} from "lucide-react";
import './cart.css'
import { PayNowCard } from "../../components/PayNowCard/PayNowCard";
import { useSelector } from "react-redux";
import {useNavigate } from 'react-router';
import { CartEmpty } from "../../components/CratEmpty/CartEmpty";
import { CartHead } from "../../components/CartHead/CartHead";

export const Cart = () => {
  const navigate = useNavigate()
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0); 


  return (
    <>
    {items.length > 0 ? (
  <div className="cart-container">
  <div className="cart-box">
        <CartHead/>
      <div className="all-payPizza-box">{
            items.map((pizza)=> <PayNowCard key={pizza.id} pizza={pizza} />)}
      </div>
        <div className="total-pizzaPay-box">
    <div className="total-pizza">
      <div className="total-pizzaCount">
        <p> Всего пицц: <span>{totalCount} шт.</span> </p>
      </div>
      <div className="total-pizzaPrice">
        <p>
          Сумма заказа: <span>{totalPrice} ₽</span>
        </p>
      </div>
    </div>
    <div className="puyNow-backNow">
      <button onClick={()=> navigate(-1)}><MoveLeft /> <p>Вернуться назад</p></button>
      <button>Оплатить сейчас</button>
    </div>
        </div>
  </div>

</div>
    ) : <CartEmpty/>}
    </>
  );
};

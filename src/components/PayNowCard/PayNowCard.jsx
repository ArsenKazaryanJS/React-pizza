import { Minus, Plus, X } from 'lucide-react';
import './payNow.css';
import { useDispatch } from 'react-redux';
import { plusMinus, removeItem } from '../../redux/slices/cartSlice';

export const PayNowCard = ({ pizza }) => {
    const dispatch = useDispatch();

    return (
        <div className="cart-pizzaCard">
            <div className="cart-pizzaCard-imgBox">
                <img src={pizza.imageUrl} alt={pizza.title} />
                <div className="cart-pizzaCard-title">
                    <h3>{pizza.title}</h3>
                    <p>{pizza.type}, { pizza.size.map((el,i)=> <span key={i}>{el} см.</span>)}</p>
                </div>
            </div>
            <div className="priceAndCountBox">
                <div className="count-box">
                    <Minus onClick={()=> dispatch(plusMinus({id:pizza.id,argument:'minus'}))}/>
                    <span className="count">{pizza.count || 1}</span>
                    <Plus onClick={()=> dispatch(plusMinus({id:pizza.id,argument:'plus'}))}/>
                </div>
                <div className="pizza-price">
                    <p>{pizza.price} ₽</p>
                </div>
                <X className="x" onClick={()=> dispatch(removeItem({id:pizza.id}))} />
            </div>
        </div>
    );
};
import { useState } from "react";
import './pizzaCard.css';
import { Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../../redux/slices/cartSlice";

export const PizzaCard = ({id,title, imageUrl, sizes, types, price}) => {
    const dispatch = useDispatch();  
    const item = useSelector((state)=> state.cart.items.find((el)=> el.id === id))
    const cartItem = item ? item.count : ''
    const [sizeCardIndex, setSizeCardIndex] = useState(0);
    const [typeCardIndex, setTypeCardIndex] = useState(0);
    const typeArray = ['тонкое', 'традиционное'];
    

    const handleItemAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type:typeArray[typeCardIndex],
      size:sizes[sizeCardIndex]
    }
    dispatch(addPizza(item))
  };
  

    return (
        <div className="pizza-card">
            <div className="img_box">
                <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
            </div>
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.map((type, typeIndex) => (
                        <li key={typeIndex} onClick={() => setTypeCardIndex(type)} className={typeCardIndex === type ? 'active' : ''}>
                            {typeArray[type]}
                        </li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((s, i) => (
                        <li key={i} onClick={() => setSizeCardIndex(i)} className={sizeCardIndex === i ? "active" : ''}>
                            {s}см.
                        </li>
                    ))}
                </ul>
            </div>
            <div onClick={handleItemAdd} className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div className="button button--outline button--add">
                    <Plus />
                    <span>Добавить</span>
                    {
                      cartItem && (<i>{cartItem}</i>)
                    }
                </div>
            </div>
        </div>
    );
};
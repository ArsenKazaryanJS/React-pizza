import { NavLink } from 'react-router'
import logoSvg from '../../assets/img/pizza-logo.svg'
import './pizzaHeader.css'
import {ShoppingBasket} from 'lucide-react'
import { useSelector } from 'react-redux'

export const PizzaHeader = () => {
  const {items,totalPrice} = useSelector((state)=> state.cart)
  const totalCount = items.reduce((sum, item) => sum + item.count, 0); 


  return (
    <div className="header">
    <div className="container">
      <div className="header__logo">
        <NavLink to="/">
        <img width="38" src={logoSvg} alt="Pizza logo" />
        </NavLink>
        <div>
          <h1>React Pizza</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>
      <div className="header__cart">
        <NavLink to='/cart' className="button--cart">
          <span className='total-price-span'>{totalPrice} ₽</span>
          <div className="button__delimiter"></div>
          <ShoppingBasket />
          {
            items.length > 0 && (
              <span>{totalCount}</span>
            )
          }
        </NavLink>
      </div>
    </div>
  </div>
  )
}



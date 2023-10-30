import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component'


import './cart-dropdown.style.scss'
import { CartContext } from '../../context/cart.context';
import CartItem from '../cart-items/cart-items.component';

const CardDropdown = () => {

    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckoutPage = () => {
        navigate('/checkout')
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' >
                {cartItems.map((item)=>(
                    <CartItem key={item.id} cartItems={item} />
                ))}
            </div>
            <Button onClick={goToCheckoutPage}>Go to checkout</Button>
        </div>
    )
}

export default CardDropdown;

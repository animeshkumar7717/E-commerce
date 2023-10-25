import Button from '../button/button.component'


import './cart-dropdown.style.scss'

const CardDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button>Go to checkout</Button>
        </div>
    )
}

export default CardDropdown;

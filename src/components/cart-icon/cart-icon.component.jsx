import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';


const CartIcon = () => {
    const { isCartOpen, setCartOpen, itemCount } = useContext(CartContext)

    const toggleCart = () => {
        setCartOpen(!isCartOpen)
    }

    //const totalItems = cartItems.map(item => item.quantity).reduce((acc, curr) => acc + curr, 0)

    return (
        <div className='cart-icon' onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
            
        </div>
    )
}

export default CartIcon;
import React, { useContext } from 'react';
import { CartItem } from '../components/CartItem';
import ShopContext from '../context/shop-context';

const Cart = props => {
    const context = useContext(ShopContext);

    let cartItems = context.cart.map((item, i) => <CartItem key={i} id={item.id} title ={item.title} quantity={item.quantity} />);

    return(
        <div className="d-flex justify-content-center">{cartItems}</div>
    );
};

export default Cart;
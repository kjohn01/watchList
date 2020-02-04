import React, { useContext } from 'react';
import CartItem from '../components/CartItem';
import ShopContext from '../context/shop-context';

const Cart = props => {
    const context = useContext(ShopContext);
    if (context.cart.length > 0) {
        let cartItems = context.cart.map((item, i) => <CartItem key={i} id={item.id} title ={item.title} quantity={item.quantity} />);

        return(
            <div className="d-flex flex-column align-content-center">{cartItems}</div>
        );
    }
    else return(
        <div className="align-items-center d-flex flex-column my-5">
            <h2 className="my-5">Empty Cart</h2>
            <a className="btn btn-info" href="/">Go Shop</a>
        </div>
    );
};

export default Cart;
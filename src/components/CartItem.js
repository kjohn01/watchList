import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const CartItem = props => {

    const add = () => {};
    const remove = () => {};
    
    return(
        <div className="d-flux m-3">
            <h2>{props.name}</h2>
            <p>{props.quantity}</p>
            <Button onClick={add}>Add</Button>
            <Button onClick={remove}>Remove</Button>
        </div>
    );
};

CartItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number
};

export default CartItem;
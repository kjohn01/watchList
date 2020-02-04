import React from 'react'
import PropTypes from 'prop-types'

const CartItem = props => {
    return(
        <div>

        </div>
    );
};

CartItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number
};

export default CartItem;
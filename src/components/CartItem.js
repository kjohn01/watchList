import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import ShopContext from '../context/shop-context';

const CartItem = props => {
    const context = useContext(ShopContext);

    return(
        <Row className="m-3">
            <Col md="auto"><h3>{props.title}</h3></Col>
            <Col xs lg="6" className="d-flex justify-content-center">
                <Button onClick={() => { context.addProductToCart(props); }}>+</Button>
                <p>{props.quantity}</p>
                <Button onClick={() => { context.removeProductFromCart(props.id); }}>-</Button>
            </Col>
        </Row>
    );
};

CartItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    quantity: PropTypes.number
};

export default CartItem;
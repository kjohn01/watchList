import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';

const CartItem = props => {

    const add = () => {};
    const remove = () => {};

    return(
        <Row className="m-3">
            <Col md="auto"><h3>{props.name}</h3></Col>
            <Col xs lg="6" className="d-flex justify-content-center">
                <Button onClick={add}>+</Button>
                <p>{props.quantity}</p>
                <Button onClick={remove}>-</Button>
            </Col>
        </Row>
    );
};

CartItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number
};

export default CartItem;
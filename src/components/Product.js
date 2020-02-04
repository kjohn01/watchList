import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const Product = props => {

    const addToCart = () => {
        console.log(`Adding product ${props.id} to cart.`);
    };

    return(
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Button variant="primary" onClick={addToCart}>Add to cart</Button>
            </Card.Body>
        </Card>
    );
};

Product.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number
};

export default Product;
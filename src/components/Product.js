import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Row, Col } from 'react-bootstrap';
import ShopContext from '../context/shop-context';

const Product = props => {

    const context = useContext(ShopContext);

    return(
        <Card className="m-3">
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Row>
                    <Col>
                        <Button variant="primary" onClick={() => { context.addProductToCart(props);
                        console.log("cart in the context");
                        console.log(context.cart); 
                        }}>Add to cart</Button>
                    </Col>
                    <Col>
                        <Card.Text>{`$ ${props.price}`}</Card.Text>
                    </Col>
                </Row>
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
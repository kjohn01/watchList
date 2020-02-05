import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Row, Col } from 'react-bootstrap';

// Pure presentational component, the functions of the buttons are passed from props.
const Series = props => {
    return(
        <Card className="m-3">
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Row>
                    {
                        props.action1 && props.action1Text 
                            ? <Col>
                                <Button variant="primary" onClick={props.action1}>{props.action1Text}</Button>
                            </Col> 
                            : null
                    }
                    {
                        props.action2 && props.action2Text 
                            ? <Col>
                                <Button variant="secondary" onClick={props.action2}>{props.action2Text}</Button>
                            </Col> 
                            : null
                    }
                </Row>
            </Card.Body>
        </Card>
    );
};

Series.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    action1: PropTypes.func,
    action1Text: PropTypes.string,
    action2: PropTypes.func,
    action2Text: PropTypes.string
};

export default Series;
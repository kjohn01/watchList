import React from 'react';
import Nav from 'react-bootstrap/Nav';

const NavBar = props => {
  return (
    <Nav defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
            <Nav.Link href="/">Products</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link eventKey="cart" href="/cart">Cart</Nav.Link>
        </Nav.Item>
    </Nav>
  );
}

export default NavBar;
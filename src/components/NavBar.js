import React from 'react';
import Nav from 'react-bootstrap/Nav';

const NavBar = props => {
  return (
    <Nav defaultActiveKey="/" as="ul" className="my-4">
        <Nav.Item as="li">
            <Nav.Link href="/">Products</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link href="/cart">Cart</Nav.Link>
        </Nav.Item>
    </Nav>
  );
}

export default NavBar;
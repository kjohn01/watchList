import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NavBar = props => {
  return (
    <Nav defaultActiveKey="/" as="ul" className="my-4">
        <Nav.Item as="li" className="m-3">
            <Link to="/">Later</Link>
        </Nav.Item>
        <Nav.Item as="li" className="m-3">
            <Link to="/playlist">Playlist</Link>
        </Nav.Item>
        <Nav.Item as="li" className="m-3">
            <Link to="/watched">watched</Link>
        </Nav.Item>
    </Nav>
  );
}

export default NavBar;
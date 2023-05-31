
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userActions';

function Header() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  // debugger
  const { userInfo } = userLogin ? userLogin : undefined;
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Registration Form</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Nav className='m -auto'>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i>Log In
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;



import React from 'react';
import './Styling.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userActions';
import { useState, useEffect } from 'react';
function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search ? location.search.split('=')[1] : '/';
  useEffect(() => {
    console.log('daddy is here?', userInfo);
    if (userInfo ? userInfo.length != 0 : userInfo) {
      // console.log('dodood')
      // history.pushState(redirect)
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Yo Babe is ');
    dispatch(login(email, password));
  };

  return (
    <>
      <FormContainer>
        <h1>Sign In</h1>
        {error && <Message variant={'danger'}>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <div className='forgot-password'>Forgot Password</div>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button type='submit' variant='primary'>
            Sign In
          </Button>
        </Form>
        <Row className={'py-3'}>
          <Col>
            New Customer? <br />
            <Link to={redirect ? `/register` : '/register'}>
              Register Your Self
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
}

export default LoginScreen;

import React from 'react';
import './Styling.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { registerUser } from '../actions/userActions';
import { useState, useEffect } from 'react';
function RegisterScreen() {
  // const passwordRegex = /^(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?=\w).*$/;
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [retypepassword, setReTypePassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useDispatch();

  const userSignup = useSelector((state) => state.userSignup);
  const { loading, error, userInfo } = userSignup;
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search ? location.search.split('=')[1] : '/';
  useEffect(() => {
    if (userInfo ? userInfo.length !== 0 : userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password != retypepassword) {
      setPasswordError('Passwords And Re-Type Password do not match');
    } else {
      setPasswordError('');
      dispatch(registerUser(firstname, lastname, email, password, role));
      if (role === 'owner') {
        navigate('/ownerpage');
      } else if (role === 'manager') {
        navigate('/managerpage');
      }
    }
    // e.preventDefault();
    // console.log('Yo Babe is ');
    // dispatch(registerUser(firstname, lastname, email, password));

   
  };

  return (
    <>
      <FormContainer>
        <h1>Sign Up</h1>
        {error && <Message variant={'danger'}>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Row>
            <Col>
              <Form.Group controlId='firstname'>
                <Form.Label>
                  First Name <span className='required'>*</span>
                </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='First Name'
                  required='true'
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='lastname'>
                <Form.Label>
                  Last Name
                  <span className='required'>*</span>
                </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Last Name'
                  required='true'
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId='email'>
            <Form.Label>
              {' '}
              Email <span className='required'>*</span>
            </Form.Label>
            <Form.Control
              type='email'
              placeholder='Email '
              required='true'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>
              {' '}
              Password <span className='required'>*</span>
            </Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              required='true'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='reTypePassword'>
            <Form.Label>
              Re-Type Password <span className='required'>*</span>
            </Form.Label>
            <Form.Control
              type='password'
              placeholder='Re-Type Password'
              required='true'
              value={retypepassword}
              onChange={(e) => setReTypePassword(e.target.value)}
            />
            {passwordError && <div className='error'>{passwordError}</div>}
          </Form.Group>

          <Form.Group controlId='role'>
            <Form.Label>
              Role <span className='required'>*</span>
            </Form.Label>
            <div>
              <Form.Check
                inline
                type='radio'
                label='Owner'
                name='role'
                value='owner'
                checked={role === 'owner'}
                onChange={() => setRole('owner')}
              />
              <Form.Check
                inline
                type='radio'
                label='Manager'
                name='role'
                value='manager'
                checked={role === 'manager'}
                onChange={() => setRole('manager')}
              />
            </div>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Sign Up
          </Button>
        </Form>
        <Row className={'py-3'}>
          <Col>
            Have account?
            <Link to={redirect ? `/login` : '/login'}>Log In</Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
}

export default RegisterScreen;

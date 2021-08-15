import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Container } from '@material-ui/core';

const Navbar = () => {
  return (
    <>
      <AppBar variant='outlined' color='primary' style={{ background: '#444' }}>
        <Container>
          <Link
            style={{
              zIndex: '10',
            }}
            to='/'
          >
            <Button variant='outlined' style={{ color: 'white' }}>
              Home
            </Button>
          </Link>
          <Link
            style={{
              zIndex: '10',
            }}
            to='/about'
          >
            <Button variant='outlined' style={{ color: 'white' }}>
              About
            </Button>
          </Link>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;

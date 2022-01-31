import { useContext } from 'react';
import logo from '../assists/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import StudentContext from '../context/StudentContext';

export default function NavBar() {
  const { handleSearchChange } = useContext(StudentContext);

  return (
    <Navbar bg='light' expand='lg' className='mb-5'>
      <Container>
        <Navbar.Brand href='#'>
          <img
            alt=''
            src={logo}
            width='50'
            height='50'
            className='d-inline-block align-center'
          />{' '}
          Student Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='#action2'>Logout</Nav.Link>
          </Nav>
          <Form className='d-flex'>
            <FormControl
              type='search'
              placeholder='Search student'
              className='me-2'
              aria-label='Search'
              onChange={handleSearchChange}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

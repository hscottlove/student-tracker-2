import { useContext } from 'react';
import StudentContext from '../context/StudentContext';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';

export default function StudentEditForm() {
  const { name, phone, handleSubmit, handleNameChange, handlePhoneChange } =
    useContext(StudentContext);

  return (
    <Container>
      <Form className='mb-5' onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <Form.Group as={Col} htmlFor='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleNameChange}
              type='text'
              value={name}
              placeholder='Full name'
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridImage'>
            <Form.Label>Image</Form.Label>
            <Form.Control placeholder='Paste URL' />
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} htmlFor='phone'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              onChange={handlePhoneChange}
              value={phone}
              type='text'
              name='phone'
              id='phone'
            />
          </Form.Group>

          <Form.Group as={Col} htmlFor='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' name='email' id='email' />
          </Form.Group>

          <Form.Group as={Col} htmlFor='grade'>
            <Form.Label>Grade</Form.Label>
            <Form.Control type='number' name='grade' id='grade' />
          </Form.Group>
        </Row>

        <Form.Group className='mb-3' htmlFor='notes'>
          <Form.Label>Notes</Form.Label>
          <Form.Control
            style={{ resize: 'none' }}
            name='notes'
            id='notes'
            as='textarea'
            rows={3}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

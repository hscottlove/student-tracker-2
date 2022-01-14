import { useContext, useState } from 'react';
import StudentContext from '../context/StudentContext';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';

export default function StudentEditForm() {
  const { handleStudentAdd } = useContext(StudentContext);

  const defaultImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgprFQGqxHFOm1UVGESj3v-16NVyvBiwiF-sHUGakrPBeDJ6Uh8uvJbDFMttF4dL1XGO8&usqp=CAU';

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState('');
  const [notes, setNotes] = useState('');
  const [message, setMessage] = useState('');
  const [btnDiabled, setBtnDisabled] = useState(true);

  const handleChangeInput = (value, e) => {
    if (name === '') {
      setMessage(null);
      setBtnDisabled(true);
    } else if (name !== '' && name.trim().length <= 3) {
      setMessage(`Please enter full name`);
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    value(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (image === '') {
      return setImage(defaultImage);
    }

    const newStudent = {
      name,
      image,
      phone,
      email,
      grade,
      notes,
    };

    handleStudentAdd(newStudent);

    setName('');
    setImage('');
    setPhone('');
    setEmail('');
    setGrade('');
    setNotes('');
    setBtnDisabled(true);
  }

  return (
    <Container>
      <Form className='mb-5' onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <Form.Group as={Col} htmlFor='name'>
            <Form.Label className='form-title'>Name</Form.Label>
            <Form.Control
              onChange={(e) => handleChangeInput(setName, e)}
              type='text'
              value={name}
              placeholder='Full name'
            />
            {message && <div>{message}</div>}
          </Form.Group>

          <Form.Group as={Col} controlId='formGridImage'>
            <Form.Label className='form-title'>Image</Form.Label>
            <Form.Control
              onChange={(e) => handleChangeInput(setImage, e)}
              value={image}
              placeholder='Paste URL'
            />
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} htmlFor='phone'>
            <Form.Label className='form-title'>Phone</Form.Label>
            <Form.Control
              onChange={(e) => handleChangeInput(setPhone, e)}
              value={phone}
              type='text'
              name='phone'
              id='phone'
            />
          </Form.Group>

          <Form.Group as={Col} htmlFor='email'>
            <Form.Label className='form-title'>Email</Form.Label>
            <Form.Control
              onChange={(e) => handleChangeInput(setEmail, e)}
              value={email}
              type='email'
              name='email'
              id='email'
            />
          </Form.Group>

          <Form.Group as={Col} htmlFor='grade'>
            <Form.Label className='form-title'>Grade</Form.Label>
            <Form.Control
              onChange={(e) => handleChangeInput(setGrade, e)}
              value={grade}
              type='number'
              name='grade'
              id='grade'
            />
          </Form.Group>
        </Row>

        <Form.Group className='mb-3' htmlFor='notes'>
          <Form.Label className='form-title'>Notes</Form.Label>
          <Form.Control
            style={{ resize: 'none' }}
            onChange={(e) => handleChangeInput(setNotes, e)}
            value={notes}
            name='notes'
            id='notes'
            as='textarea'
            rows={3}
          />
        </Form.Group>

        <Button variant='primary' type='submit' disabled={btnDiabled}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

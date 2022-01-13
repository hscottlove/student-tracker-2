import { useContext, useState } from 'react';
import StudentContext from '../context/StudentContext';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';

export default function StudentEditForm() {
  const { handleStudentAdd } = useContext(StudentContext);

  // const defaultImage =
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgprFQGqxHFOm1UVGESj3v-16NVyvBiwiF-sHUGakrPBeDJ6Uh8uvJbDFMttF4dL1XGO8&usqp=CAU';

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState('');
  const [notes, setNotes] = useState('');
  const [message, setMessage] = useState('');
  const [btnDiabled, setBtnDisabled] = useState(true);

  const handleTest = (e) => {
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

    setName(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    // if (name.trim().length === 1 || name === '') {
    //   console.log(`Enter a full name`);
    //   return null;
    // }

    // if (image === '') {
    //   return setImage(defaultImage);
    // }

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
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleTest}
              type='text'
              value={name}
              placeholder='Full name'
              onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              onCopy={(e) => {
                e.preventDefault();
                return false;
              }}
            />
            {message && <div>{message}</div>}
          </Form.Group>

          <Form.Group as={Col} controlId='formGridImage'>
            <Form.Label>Image</Form.Label>
            <Form.Control
              onChange={(e) => setImage(e.target.value)}
              value={image}
              placeholder='Paste URL'
            />
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} htmlFor='phone'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type='text'
              name='phone'
              id='phone'
            />
          </Form.Group>

          <Form.Group as={Col} htmlFor='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type='email'
              name='email'
              id='email'
            />
          </Form.Group>

          <Form.Group as={Col} htmlFor='grade'>
            <Form.Label>Grade</Form.Label>
            <Form.Control
              onChange={(e) => setGrade(e.target.value)}
              value={grade}
              type='number'
              name='grade'
              id='grade'
            />
          </Form.Group>
        </Row>

        <Form.Group className='mb-3' htmlFor='notes'>
          <Form.Label>Notes</Form.Label>
          <Form.Control
            style={{ resize: 'none' }}
            onChange={(e) => setNotes(e.target.value)}
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

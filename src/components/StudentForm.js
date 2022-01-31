import { useContext, useState } from 'react';
import StudentContext from '../context/StudentContext';
import { Form, Row, Col, Button } from 'react-bootstrap';

const StudentForm = ({ handleAddClose }) => {
  const { handleStudentAdd } = useContext(StudentContext);
  const defaultImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgprFQGqxHFOm1UVGESj3v-16NVyvBiwiF-sHUGakrPBeDJ6Uh8uvJbDFMttF4dL1XGO8&usqp=CAU';

  const [formInfo, setFormInfo] = useState({
    name: '',
    image: '',
    phone: '',
    email: '',
    grade: '',
    notes: '',
  });
  const [message, setMessage] = useState('');
  const [btnDiabled, setBtnDisabled] = useState(true);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    if (formInfo.name === '') {
      setMessage(null);
      setBtnDisabled(true);
    } else if (name !== '' && name.trim().length <= 3) {
      setMessage(`Please enter full name`);
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setFormInfo((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const { name, image, phone, email, grade, notes } = formInfo;

    if (image === '') {
      return setFormInfo((prev) => {
        return {
          ...prev,
          image: defaultImage,
        };
      });
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

    setFormInfo('');
    setBtnDisabled(true);
    handleAddClose();
  }

  return (
    <Form className='mb-5' onSubmit={handleSubmit}>
      <Row className='mb-3'>
        <Form.Group as={Col} htmlFor='name'>
          <Form.Label className='form-title'>Name</Form.Label>
          <Form.Control
            onChange={handleChangeInput}
            type='text'
            value={formInfo.name}
            name='name'
            placeholder='Full name'
          />
          {message && <div>{message}</div>}
        </Form.Group>

        <Form.Group as={Col} controlId='formGridImage'>
          <Form.Label className='form-title'>Image</Form.Label>
          <Form.Control
            onChange={handleChangeInput}
            value={formInfo.image}
            name='image'
            placeholder='Paste URL'
          />
        </Form.Group>
      </Row>

      <Row className='mb-3'>
        <Form.Group as={Col} htmlFor='phone'>
          <Form.Label className='form-title'>Phone</Form.Label>
          <Form.Control
            onChange={handleChangeInput}
            value={formInfo.phone}
            type='text'
            name='phone'
            id='phone'
          />
        </Form.Group>

        <Form.Group as={Col} htmlFor='email'>
          <Form.Label className='form-title'>Email</Form.Label>
          <Form.Control
            onChange={handleChangeInput}
            value={formInfo.email}
            type='email'
            name='email'
            id='email'
          />
        </Form.Group>

        <Form.Group as={Col} htmlFor='grade'>
          <Form.Label className='form-title'>Letter Grade</Form.Label>
          <Form.Select
            onChange={handleChangeInput}
            value={formInfo.grade}
            type='number'
            name='grade'
            id='grade'
          >
            <option>N/A</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>F</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group className='mb-3' htmlFor='notes'>
        <Form.Label className='form-title'>Notes</Form.Label>
        <Form.Control
          style={{ resize: 'none' }}
          onChange={handleChangeInput}
          value={formInfo.notes}
          name='notes'
          id='notes'
          as='textarea'
          rows={3}
        />
      </Form.Group>

      <Button
        className='me-2'
        variant='primary'
        type='submit'
        disabled={btnDiabled}
      >
        Submit
      </Button>
      <Button onClick={handleAddClose} variant='dark' type='button'>
        Close
      </Button>
    </Form>
  );
};

export default StudentForm;

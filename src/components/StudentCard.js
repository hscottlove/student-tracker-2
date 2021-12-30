import { useContext } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import StudentContext from '../context/StudentContext';

export default function StudentCard(props) {
  const { id, name, image, email, phone, grade, notes } = props;
  const { handleStudentDelete } = useContext(StudentContext);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{ height: '200px' }} src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <hr />
        <Card.Text>Notes: {notes}</Card.Text>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroupItem>Email: {email}</ListGroupItem>
        <ListGroupItem>Phone: {phone}</ListGroupItem>
        <ListGroupItem>Grade: {grade}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button className='me-2' variant='primary'>
          Edit
        </Button>
        <Button variant='danger' onClick={() => handleStudentDelete(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

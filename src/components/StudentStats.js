import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import StudentContext from '../context/StudentContext';

export default function StudentStats() {
  const { students } = useContext(StudentContext);

  if (!students || students.length === 0) {
    return null;
  }

  return (
    <Container className='mb-5'>
      <h4>{students.length} Students</h4>
    </Container>
  );
}

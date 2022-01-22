import { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import StudentCard from './StudentCard';
import StudentContext from '../context/StudentContext';

export default function CardList() {
  const { filterStudents } = useContext(StudentContext);

  if (!filterStudents || filterStudents.length === 0) {
    return (
      <h2
        style={{ height: '30vh' }}
        className='d-flex justify-content-center align-items-center'
      >
        No Students Available.
      </h2>
    );
  }

  return (
    <>
      <Container>
        <Row className='justify-content-center gap-4'>
          {filterStudents.map((student) => {
            return <StudentCard key={student.id} {...student} />;
          })}
        </Row>
      </Container>
    </>
  );
}

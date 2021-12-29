import { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import StudentCard from './StudentCard';
import StudentContext from '../context/StudentContext';

export default function CardList() {
  const { students } = useContext(StudentContext);
  return (
    <>
      <Container>
        <Row className='justify-content-center gap-4'>
          {students.map((student) => {
            return <StudentCard key={student.id} {...student} />;
          })}
        </Row>
      </Container>
    </>
  );
}

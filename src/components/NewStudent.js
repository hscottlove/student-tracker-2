import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import StudentForm from './StudentForm';

export default function StudentEditForm() {
  const [isEditing, setIsEditing] = useState(false);

  const handleAddView = () => {
    setIsEditing(true);
  };

  const handleAddClose = () => {
    setIsEditing(false);
  };

  return (
    <Container>
      {!isEditing && (
        <div className='d-flex justify-content-center'>
          <Button onClick={handleAddView}>Add New Student</Button>
        </div>
      )}
      {isEditing && <StudentForm handleAddClose={handleAddClose} />}
    </Container>
  );
}

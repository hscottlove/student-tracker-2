import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(data);
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');

  const filterStudents = students.filter((student) => {
    return student.name.toLowerCase().includes(search.toLowerCase());
  });

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleStudentAdd(newStudent) {
    newStudent.id = uuidv4();
    console.log(newStudent);
  }

  function handleStudentDelete(id) {
    if (window.confirm(`Are you sure you want to delete this student?`)) {
      setStudents(students.filter((student) => student.id !== id));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newStudent = {
      text,
    };

    handleStudentAdd(newStudent);

    setText('');
  }

  return (
    <StudentContext.Provider
      value={{
        students,
        text,
        filterStudents,
        handleSearchChange,
        handleTextChange,
        handleStudentAdd,
        handleStudentDelete,
        handleSubmit,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContext;

const data = [
  {
    id: 1,
    name: 'Marcelo Garcia',
    image:
      'https://images.unsplash.com/photo-1618827840222-fcf8f42509c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    email: 'mgarcia@gmail.com',
    phone: 9256496486,
    grade: 91.3,
    notes: 'Schedual a meeting Monday to talk about grades.',
  },
  {
    id: 2,
    name: 'Amanda Love',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    email: 'amanda@gmail.com',
    phone: 9259496020,
    grade: 95,
    notes: 'Ask about project outline.',
  },
  {
    id: 3,
    name: 'Jim Jones',
    image:
      'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    email: 'jimjones77@gmail.com',
    phone: 7136476020,
    grade: 85.4,
    notes: 'Email extra credit opportunities.',
  },
];

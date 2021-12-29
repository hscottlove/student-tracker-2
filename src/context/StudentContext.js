import { createContext, useState } from 'react';

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(data);
  return (
    <StudentContext.Provider value={{ students }}>
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

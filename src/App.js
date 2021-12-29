import NavBar from './components/NavBar';
import StudentEditForm from './components/StudentEditForm';
import CardList from './components/CardList';
import { StudentProvider } from './context/StudentContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <StudentProvider>
      <NavBar />
      <StudentEditForm />
      <CardList />
    </StudentProvider>
  );
}

export default App;

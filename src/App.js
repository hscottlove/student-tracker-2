import NavBar from './components/NavBar';
import StudentEditForm from './components/StudentEditForm';
import StudentStats from './components/StudentStats';
import CardList from './components/CardList';
import { StudentProvider } from './context/StudentContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <StudentProvider>
      <NavBar />
      <StudentEditForm />
      <StudentStats />
      <CardList />
    </StudentProvider>
  );
}

export default App;

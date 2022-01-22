import NavBar from './components/NavBar';
import NewStudent from './components/NewStudent';
import StudentStats from './components/StudentStats';
import CardList from './components/CardList';
import { StudentProvider } from './context/StudentContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <StudentProvider>
      <NavBar />
      <NewStudent />
      <StudentStats />
      <CardList />
    </StudentProvider>
  );
}

export default App;

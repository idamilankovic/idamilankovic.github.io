import Counters from './components/counters';
import './App.css';
import NavBar from './components/navbar';

function App() {
  return (
    <div>
      <NavBar />
      <main className = 'container'>
        <Counters />
      </main>
    </div>
  );
}

export default App;

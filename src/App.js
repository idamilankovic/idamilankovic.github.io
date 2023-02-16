import GetCurrentTemp from './components/getCurrentTemperature';

function App() {
  return (
    <div className='container'>
      <h1>Odaberi grad za prikaz temperature:</h1>
      <GetCurrentTemp />
    </div>
  );
}

export default App;

import { Box } from '@mui/system';
import City from './components/city';
import AppBar from '@mui/material/AppBar'

function App() {

  return (
    <div className='container'>
      <h1>Odaberi grad za prikaz temperature:</h1>
      <City />
    </div>
  );
}

export default App;

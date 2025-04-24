import logo from './logo.svg';
import './App.css';
import CardGrid from './components/CardGrid';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <div className='container'>
        <Navbar/>
        <CardGrid />

      </div>

    </div>
  );
}

export default App;

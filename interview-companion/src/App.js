import logo from './logo.svg';
import Applications  from './Applications';
import PermanentDrawer from './PermanentDrawer';
import './App.css';

function App() {
  return (
    <div style={{backgroundColor: '#e57373', height:'100vh', overflow:'auto'}}>
      <PermanentDrawer></PermanentDrawer>
      <Applications />
    </div>
  );
}

export default App;

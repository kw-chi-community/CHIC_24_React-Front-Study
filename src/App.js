import './App.css';
import Traffic from './Component/Traffic';
import House from './Component/House';
import Environment from './Component/Environment';
import GRDP from './Component/GRDP';

function App() {
  return (
    <div className="App">
      <Traffic/>
      <House />
      <Environment />
      <GRDP />
    </div>
  );
}

export default App;

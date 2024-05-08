import './App.css';
import Apic from './components/Apic';
import Apipost from './components/apipost';
import NumbInput from './components/NumInput';
import ResponseDisplay from './components/ResponseDisplay';
function App() {
  return (
    <div className="App">
     {/* <Apic/>
     <Apipost/> */}
     <NumbInput/>
     <ResponseDisplay/>
    </div>
  );
}

export default App;

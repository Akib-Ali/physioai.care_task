import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import AllPatient from './components/patient-list/list';
import AllRoute from './components/Allroutes/allroutes';

function App() {
  return (
    <div className="App">
      
      {/* <Login/> */}
      {/* <AllPatient/> */}
      <AllRoute/>
     
    </div>
  );
}

export default App;

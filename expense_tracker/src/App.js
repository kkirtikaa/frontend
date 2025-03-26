import { Route, Routes } from 'react-router-dom';
import './asset/css/App.css';
import Homepage from './componants/Homepage';
import Register from './componants/Register';
import Dashboard from './componants/Dashboard';
function App() {
  return(
    <div>
    <Routes>
     <Route path ="/" element={<Homepage/>}/>
     <Route path ="/Register"element={<Register/>}/>
     <Route path ="/Dashboard"element={<Dashboard/>}/>

    </Routes>    
    </div>
  );


}

export default App;
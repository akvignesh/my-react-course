import Welcome from "./components/Welcome";
import WorkSpace from "./components/WorkSpace";
import Planning from "./components/Planning";
import Congratulations from './components/Congratulations';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
    <Routes>
     <Route path ="/" element={<Welcome/>}/>
     <Route path ="/home" element={<WorkSpace/>}/>
     <Route path ="/planning" element={<Planning/>}/>
     <Route path ="/congratulations" element={<Congratulations/>}/>
    </Routes>
    </div>
  );
}

export default App;

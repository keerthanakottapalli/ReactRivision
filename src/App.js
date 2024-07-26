import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import JsxExample from './RoadMap/JsxExample';
import Styles from './RoadMap/Styles';
import LifecycleExample from './RoadMap/LifecycleExample';
import StateManagementRcc from './RoadMap/StateManagementRcc';
import StateManagementRfc from './RoadMap/StateManagementRfc';
import Header from './RoadMap/Header';
import MainSidebar from './RoadMap/Sidebar';
function App() {
  return (
    <div >
     <Router>
        <Routes>
          <Route path='/' element={<Header/>}></Route>
          <Route path='/jsx' element={<JsxExample/>}></Route>
          <Route path='/styles' element={<Styles/>}></Route>
          <Route path='/cycle' element={<LifecycleExample/>}></Route>
          <Route path='/rcc' element={<StateManagementRcc/>}></Route>
          <Route path='/rfc' element={<StateManagementRfc/>}></Route>
          <Route path='/sidebar' element={<MainSidebar/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

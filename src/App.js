import logo from './logo.svg';
import './App.css';
import Headers from './components/Headers/Headers';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ManageItems from './components/ManageItems/ManageItems';
import AddItems from './components/AddItems/AddItems';
import MyItems from './components/MyItems/MyItems';
function App() {
  
  return (
    <div className="App">
     <Headers></Headers>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/manageitems' element={<ManageItems></ManageItems>}></Route>
       <Route path='/additems' element={<AddItems></AddItems>}></Route>
       <Route path='/myitems' element={<MyItems></MyItems>}></Route>
     </Routes>
    </div>
  );
}

export default App;

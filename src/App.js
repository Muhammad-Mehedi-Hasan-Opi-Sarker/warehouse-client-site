import logo from './logo.svg';
import './App.css';
import Headers from './components/Headers/Headers';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ManageItems from './components/ManageItems/ManageItems';
import AddItems from './components/AddItems/AddItems';
import MyItems from './components/MyItems/MyItems';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login';
import Inventory from './components/Inventory/Inventory';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Blog from './components/Blog/Blog';
function App() {
  
  return (
    <div className="App">
     <Headers></Headers>
     {/* Below Router */}
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/inventory/:inventoryid' element={<Inventory></Inventory>}></Route>
       <Route path='/manageitems' element={<ManageItems></ManageItems>}></Route>
       <Route path='/additems' element={<AddItems></AddItems>}></Route>
       <Route path='/myitems' element={<MyItems></MyItems>}></Route>
       <Route path='/banner' element={<Banner></Banner>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
     </Routes>
     {/* Below footer */}
     <Footer></Footer>
    </div>
  );
}

export default App;

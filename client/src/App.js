import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import Home from './Components/Home';
import ListUsers from './Components/ListUsers';
import NavUser from './Components/NavUser';

function App() {
  return (
    <div>
      <NavUser/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/UsersList' element={<ListUsers/>}/>
        <Route path='/UserAdd' element={<AddUser/>}/>
        <Route path='/EditUser/:id' element={<EditUser/>}/>
      </Routes>
    </div>
  );
}

export default App;

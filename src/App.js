import './App.css';

import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import SlotMacp from './components/slotmachine/SlotMacp';
import IncremAndDecre from './components/incrementAndDecrement/IncremAndDecre';
import Form from './components/forms/Form';   
import Container from '@material-ui/core/Container';
import Home from './components/Home';
import ToDoList from './components/todolist/ToDoList';
import FoodCart from './components/foodcart/FoodCart';
import DisplayItems from './components/displayitems/DisplayItems';
import ApnaSkills from './components/myskill/ApnaSkills';
import TodoListedit from './components/todoedit/TodoListedit';
import RegistrationForm from './components/forms/RegistrationForm';
import LoginForm from './components/forms/LoginForm';
import Cart from './components/shoppingCart/Cart';
import CrudApp from './components/crud/CrudApp';
import ChangeColor from './components/changecolor/ChangeColor';
import SearchUserProfile from './components/searchuser/SearchUserProfile';

import GrandParent from './components/contextApi/GrandParent';
function App() {
  return (
    <>
    <Menu></Menu>
      <Container>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/slotmachines' element={<SlotMacp/>} />
          <Route path='/incrementdecrement' element={<IncremAndDecre/>} />
          <Route path='/form' element={<Form/>} />
          <Route path='/todolist' element={<ToDoList/>} />
          <Route path='/foodcart' element={<FoodCart/>} />
          <Route path='/displayitems' element={<DisplayItems/>} />
          <Route path='/apnaskill' element={<ApnaSkills/>} />
          <Route path='/todolistwithedit' element={<TodoListedit/>} />
          <Route path='/registrationform' element={<RegistrationForm/>} />
          <Route path='/loginform' element={<LoginForm/>} />
          
          <Route path='/cart' element={<Cart/>} />
          <Route path='/crudapp' element={<CrudApp/>} />
          <Route path='/changecolor' element={<ChangeColor/>} />
          <Route path='/searchuser' element={<SearchUserProfile/>} />

          <Route path='/contextApieg' element={<GrandParent/>} />
          
          
        </Routes>
      </Container>
    </>
  );
}

export default App;

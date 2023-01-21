import './App.css';

import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import SlotMacp from './components/slotmachine/SlotMacp';
import IncremAndDecre from './components/incrementAndDecrement/IncremAndDecre';
import Form from './components/forms/Form';   
import Container from '@material-ui/core/Container';
import Home from './components/Home';
import ToDoList from './components/todolist/ToDoList';
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
        </Routes>
      </Container>
    </>
  );
}

export default App;

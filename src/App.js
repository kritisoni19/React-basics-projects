import './App.css';
import Accordion from './components/accordion/Accordion';
import IncremAndDecre from './components/incrementAndDecrement/IncremAndDecre';
import SlotMac from './components/slotmachine/SlotMac';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Form from './components/forms/Form';
function App() {
  return (
    <>
      <div className='main-sec'>
        <Accordion></Accordion>
        <IncremAndDecre></IncremAndDecre>
        <section className='section-main'>
        <Card>
        <CardContent>
          <h2>Welcome to Slot Machine 🎰</h2>
          </CardContent>
          <SlotMac x='😀' y='😁' z='🙂'></SlotMac>
          <SlotMac x='😄' y='😄' z='😄'></SlotMac>
        </Card>
        </section>
        <Form></Form>
      </div>
    </>
  );
}

export default App;

import './App.css'
import Navbar from './components/navbar/Navbar'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';

function App() {
  const greeting = 'Bienvenidos a mi App!'
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting = {greeting}/>
    </div>
  );
}

export default App;

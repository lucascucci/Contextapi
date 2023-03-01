import './App.css';
import PeliProvider from './context/PeliContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <PeliProvider>
        <ItemListContainer/>
      
    </PeliProvider>
  );
}

export default App;

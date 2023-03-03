import './App.css';
import PeliProvider from './context/PeliContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import FilterMovies from './components/Filter/Filter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
  <BrowserRouter>
    <PeliProvider>

      <FilterMovies/>
      <ItemListContainer/>

    </PeliProvider>
  </BrowserRouter>
  );
}

export default App;

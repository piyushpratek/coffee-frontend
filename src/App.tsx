import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Coffees from './components/Coffees';
import Coffeesforeach from './Copys/Coffeesforeach';
import Coffeesforin from './Copys/Coffeesforin';
import Coffeesforof from './Copys/Coffeesforof';
import GridExample from './examples/GridExample';

function App() {
  return (
    <Routes>
      <Route index element={<Coffees />} />
      <Route path='/grid' element={<GridExample />} />
      <Route path='/foreach' element={<Coffeesforeach />} />
      <Route path='/forof' element={<Coffeesforof />} />
      <Route path='/forin' element={<Coffeesforin />} />
    </Routes>
  );
}

export default App;

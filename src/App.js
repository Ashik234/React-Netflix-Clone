import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { originals,action,Comedy, Horror, Romance } from './urls';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Orginals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={Comedy} title='Comedy' isSmall />
      <RowPost url={Horror} title='Horror' isSmall />
      <RowPost url={Romance} title='Romance' isSmall />
    </div>
  );
}

export default App;

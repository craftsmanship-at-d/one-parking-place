import React from 'react';
import './App.css';
import Main from "./main/main";
import Sidebar from "./sidebar/sidebar";
import store from "./store";

function App() {
  const { buildings, currentBuilding} = store.getState();

  return (
    <div className="App">
      <Sidebar buildings={buildings} />
      <Main currentBuilding={currentBuilding}/>
    </div>
  );
}

export default App;

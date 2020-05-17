import React from 'react';
import { NavigationBar } from '../components/NavigationBar';
import GetPL from '../components/getProgrammingLanguage'

function App() {
  return (
    <div className="App">
    <NavigationBar />
      <div>
        <GetPL/>
      </div>
      
    </div>
  );
}

export default App;
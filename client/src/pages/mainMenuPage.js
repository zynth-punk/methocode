import React from 'react';
import { NavigationBar } from '../components/NavigationBar';
import BodyLayout from '../components/BodyLayout.js'
import GetPLsCourses from '../dataComponents/getPLsCourses.js'; 

function MainMenu() {
  return (
    <div className="App">
      <NavigationBar />
        <div className="App-PLsCourses-Tab">
          <h1>Programming Languages</h1>
          <table>
            <GetPLsCourses/>
          </table>
        </div>
        <div className="App-FWsCourses-Tab">

        </div>
    </div>
  );
}

export default MainMenu;
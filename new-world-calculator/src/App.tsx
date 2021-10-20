import React from 'react';
import TradingSkillList from './components/TradingSkills/TradingSkillList';

import './App.scss';
import Header from './components/Layout/Header';


function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <TradingSkillList/>
    </div>
  );
}

export default App;

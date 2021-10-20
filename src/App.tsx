import React from 'react';

import './App.scss';
import Header from './components/Layout/Header';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Footer from './components/Layout/Footer';
import { TradingSkillComponent } from './components/TradingSkills/TradingSkill';


function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Container fluid >
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/skills/:id"><TradingSkillComponent></TradingSkillComponent></Route>
          </Switch>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

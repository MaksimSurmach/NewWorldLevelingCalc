import React from 'react';
import Container from '@mui/material/Container';
import './App.scss';
import Header from './components/Layout/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Footer from './components/Layout/Footer';
import { TradingSkillComponent } from './components/TradingSkills/TradingSkill';

import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';


function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/skills/:id"><TradingSkillComponent></TradingSkillComponent></Route>
          </Switch>
        </Container>
        
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

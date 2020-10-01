import React from 'react';
import Header from './components/Header';
import {Container} from 'react-bootstrap';

import './App.css';
import Middle from './components/Middle';
import Middle1 from './components/Middle1';
import Last from './components/Last';
import {TransitionGroup,CSSTransition} from 'react-transition-group';

function App() {
  return (
   <Container fluid="md">
   
        <Header></Header>
        <Middle></Middle>
        <Middle1></Middle1>
        <Last></Last>
                
   </Container>


  );
}

export default App;

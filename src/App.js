import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Body/Home';
import About from './Components/Body/About';
import Services from './Components/Body/Services';
import Contact from './Components/Body/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div>
      
      <Row>
        <Router>
          <Col sm={2} className='Col1'>
            <Header/>
          </Col>
          <Col sm={10} className='Col2'>
          <Routes>
            <Route path='/react-app' exact Component={Home}/>
            <Route path='/about' exact Component={About}/>
            <Route path='/services' exact Component={Services}/>
            <Route path='/contact' exact Component={Contact}/>
          </Routes>
        </Col>
        </Router>
      </Row>
    
     </div>
      
  );
}

export default App;

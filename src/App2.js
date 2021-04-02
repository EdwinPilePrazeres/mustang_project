import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages';
import React from 'react';
import MenuTop from './components/MenuTop';


const App = () => {
  const [isVisible, setIsVisible] = React.useState(false);
 
  const toggleBox = () => {
    
    setIsVisible(!isVisible);
  };
  
    return (
      <div>
        
        <button onClick={toggleBox}>Show Box</button>
        {isVisible ? 'soy visible' : 'no lo soy'}
        [...]
      </div>
    );
  }
 
export default App;

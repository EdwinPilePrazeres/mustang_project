import React from 'react';
import './App.css';
import Home from './pages';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Abiotics from './pages/abiotics';
// import Investigations from './pages/investigations'
// import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/mustang_project' component={Home} exact />
        {/* <Route path='/up_project/abiotics' component={Abiotics}  exact/> */}
        {/* <Route path='/up_project/investigations' component={Investigations}  exact/> */}
        {/* <Route path='/up_project/contact' component={Contact}  exact/> */}
        {/* <Route path='/' component={Home} exact /> */}
      </Switch>
    </Router>
  );
}

export default App;

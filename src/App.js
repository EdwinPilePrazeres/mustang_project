import React from 'react';
// import './App.css';
import Home from './pages';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dec70 from './pages/70';
import Dec80 from './pages/80';
import Dec90 from './pages/90';
import Dec00 from './pages/00';
import Dec10 from './pages/10';
import Dec20 from './pages/20';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/mustang_project' component={Home} exact />
        <Route path='/mustang_project/70' component={Dec70} exact />
        <Route path='/mustang_project/80' component={Dec80} exact />
        <Route path='/mustang_project/90' component={Dec90} exact />
        <Route path='/mustang_project/00' component={Dec00} exact />
        <Route path='/mustang_project/10' component={Dec10} exact />
        <Route path='/mustang_project/20' component={Dec20} exact />
        {/* <Route path='/up_project/abiotics' component={Abiotics}  exact/> */}
        {/* <Route path='/up_project/investigations' component={Investigations}  exact/> */}
        {/* <Route path='/up_project/contact' component={Contact}  exact/> */}
        {/* <Route path='/' component={Home} exact /> */}
      </Switch>
    </Router>
  );
}

export default App;

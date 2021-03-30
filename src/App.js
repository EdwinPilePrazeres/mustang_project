import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages';

function App() {
  return (
    <Router >
      <Switch >
        <Route path='/mustang_project' component={Home} exact />
      </Switch>
      <Navbar />
    </Router>
  );
}

export default App;

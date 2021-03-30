import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages';
import React from 'react';

const initialList = [
  {
    id: 'a',
    task: 'Learn React',
    isComplete: false,
  },
  {
    id: 'b',
    task: 'Learn GraphQL',
    isComplete: true,
  },
];
const App = () => {
  const [list, setList] = React.useState(initialList);
 
  function handleToggleComplete(id) {
    const newList = list.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          isComplete: !item.isComplete,
        };
 
        return updatedItem;
      }
 
      return item;
    });
 
    setList(newList);
  }
 
  return <List list={list} onToggleComplete={handleToggleComplete} />;
};
 
const List = ({ list, onToggleComplete }) => (
  <ul>
    {list.map((item) => (
      <li key={item.id}>
        <span
          style={{
            textDecoration: item.isComplete ? 'line-through' : 'none',
          }}
        >
          {item.task}
        </span>
        <button
          type="button"
          onClick={() => onToggleComplete(item.id)}
        >
          {item.isComplete ? 'Undo' : 'Done'}
        </button>
      </li>
    ))}
  </ul>
);

export default App;

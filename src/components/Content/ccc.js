import React from 'react';
 
const list = [
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
 
const Ccc = () => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <span>
            {item.task}
          </span>
        </li>
      ))}
    </ul>
  );
};
 
export default Ccc;
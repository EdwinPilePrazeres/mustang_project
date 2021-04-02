import React from 'react';
 
const initialList = [
  {
    id: 'a',
    task: 'Learn React',
    isComplete: false,
    cars:[
        {
            id: 'c',
            task: 'Learn GraphQL',
            isComplete: true,
          }
    ]
  },
  {
    id: 'b',
    task: 'Learn GraphQL',
    isComplete: true,
    cars:[
        {
            id: 'd',
            task: 'u',
            isComplete: true,
          }
    ]
  },
];
 
const listReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_ITEM': {
      const newList = state.list.map((item) => {
        if (item.id === action.id) {
          const updatedItem = {
            ...item,
            isComplete: !item.isComplete,
          };
 
          return updatedItem;
        }
 
        return item;
      });
 
      return { ...state, list: newList };
    }
    default:
      throw new Error();
  }
};
 
const App = () => {
  const [listData, dispatchListData] = React.useReducer(listReducer, {
    list: initialList,
    isShowList: true,
  });
 
  function handleToggleComplete(id) {
    dispatchListData({ type: 'UPDATE_ITEM', id });
  }
 
  if (!listData.isShowList) {
    return null;
  }
 
  return (
    <List
      list={listData.list}
      onToggleComplete={handleToggleComplete}
    />
  );
};
export default App;
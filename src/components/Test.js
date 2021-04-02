import React from "react";
import MenuTop from "./MenuTop";
import { DecadesList } from "./Data";
import MenuBottom from "./MenuBottom";
import Content from "./Content";
import Circle from "./Circle/Circle";

const ListReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_ITEM":
      return state.map((item) => {
        if (item.id === action.id) {
          const updatedCarsList = {
            ...item,
            active: !item.active,
          };
          return updatedCarsList;
        }
        

        return item;
      });
    default:
      throw new Error();
  }
};
const Test = () => {
  // const [decades, setDecades] = React.useState(DecadesList);
  const [decades, setDecades] = React.useReducer(ListReducer, DecadesList);

  function handleToggleComplete(id) {
    setDecades({ type: "UPDATE_ITEM", id });
  }
  //   const newCarsList = decades.map((item) => {
  //     if (item.id === id) {
  //       const updatedCarsList = {
  //         ...item,
  //         active: !item.active,
  //       };

  //       return updatedCarsList;
  //     }

  //     return item;
  //   });

  //   setDecades(newCarsList);
  // }
  return (
    <>
      <Circle />
      <MenuTop list={decades} onToggleComplete={handleToggleComplete} />
      <Content />
      <MenuBottom list={decades} />
    </>
  );
};
// const CarsList = ({list, onToggleComplete}) => (

//     <ul>
//       {list.map((item) => (
//         <li key={item.id}>
//           <span
//             style={{
//               textDecoration: item.active ? "line-through" : "none",
//             }}
//           >
//             {item.name}
//           </span>
//           <button type="button" onClick={() => onToggleComplete(item.id)}>
//             {item.active ? "Undo" : "Done"}
//           </button>
//           {item.active
//             ? item.cars.map((subItem) => <h2 key={subItem.id}>{subItem.name}</h2>)
//             : "b"}
//         </li>
//       ))}
//     </ul>
// );

export default Test;

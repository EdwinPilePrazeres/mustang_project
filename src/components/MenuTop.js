import React from "react";
import { Link } from "react-router-dom";
import MenuBottom from "./MenuBottom";
import "./MenuTop.scss";
import Logo from "../images/logo_mustang.png";
import {DecadesList} from './Data';



const MenuTop = () => {

  const [decades, setDecades] = React.useState(DecadesList);


  // const [isVisible, setIsVisible] = React.useState(false);

  const toggleBox = (id) => {
    // setIsVisible(!isVisible);
      const newCarsList = decades.map((item) => {
      if (item.id === id) {
        const updatedCarsList = {
          ...item,
          active: !item.active,
        };

        return updatedCarsList;
      }

      return item;
    });

    setDecades(newCarsList);
  
  };

  //   return (
  //     <div>
  //       <button onClick={toggleBox}>Show Box</button>
  //       {isVisible ? 'soy visible' : 'no lo soy'}
  //       [...]
  //     </div>
  //   );
  // }
  // export const MenuBottom = [list.active, list.cars];
  return (
    <header className="menuTop">
      <Link className="logo">
        <img src={Logo} alt="" />
      </Link>
      <ul className="menu">
        {DecadesList.map((item) => (
          <li key={item.id} onClick={() => toggleBox(item.id)} style={{
            textDecoration: item.active ? "line-through" : "none",
          }}>

            <Link
              
            >
              {item.name}
            </Link>
            {/* <button type="button" onClick={() => onToggleComplete(item.id)}>
            {item.active ? "Undo" : "Done"}
          </button> */}
            {/* {item.active
            ? item.cars.map((subItem) => <h2 key={subItem.id}>{subItem.name}</h2>)
            : "b"} */}
            {/* <MenuBottom selected={item.active} list_of_cars={item.cars} /> */}
          </li>
        ))}
      </ul>
      <Link className="button">More Projects</Link>
    </header>
  );
};

export default MenuTop;

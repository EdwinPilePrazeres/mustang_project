import React from "react";
import "./MenuBottom.scss";
import { DecadesList } from "./Data";
import { Link } from "react-router-dom";

const MenuBottom = ({ list, list_of_cars }) => {

  // function ActiveList(active) {
  //   const updateList = list.map((item) => {
  //     if(item.active === active) {
        
  //     }

  //   })
  // }

  console.log(list);
  return (
    // <ul className="cars_thumbnail">
    //   <li>
    //     {selected
    //       ? list_of_cars.map((subItem) => (
    //           <h2 key={subItem.id}>{subItem.name}</h2>
    //         ))
    //       : ""}
    //   </li>
    // </ul>
    <li className="cars_thumbnail">
      {/* <li>{}</li> */}
      
      {list.map((item) => ( 
        <li key={item.id}> 
          {item.active
            ? item.cars.map((subItem) => (
                <Link key={subItem.id}>{subItem.name}</Link>
              ))
            : ""}
        </li>
      ))}
    </li>
  );
};

export default MenuBottom;

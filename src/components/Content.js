import React from "react";
import { Link } from "react-router-dom";
import MenuBottom from "./MenuBottom";
import './Content.scss';

function Content() {
  return (
    <div className="content">
      <div className="textBox">
        <h2>
          It's not just Coffee <br /> It's <span>Starbucks</span>
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          impedit nihil praesentium id, itaque quas! Accusantium, excepturi
          soluta? Tenetur ducimus neque repudiandae blanditiis, sit culpa!
        </p>
        <Link>Learn More</Link>
      </div>
      <div className="imgBox">
        <img src='' alt="" className="starbucks" />
      </div>
      {/* <MenuBottom /> */}
    </div>
  );
}

export default Content;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import thumb1 from "../../images/thumb1.png";
import thumb2 from "../../images/thumb2.png";
import thumb3 from "../../images/thumb3.png";
import "./Content.css";


const Content = () => {
    const quotes = {
        0: {
            Img: img1
        },
        1: {
            Img: img2,
        },
        2: {
            Img: img3
        }
    }
    const [current, setCurrent] = useState(quotes[1]);
    const [active, setActive] = useState(0);
    const handleSetClick = () => {
        console.log("hello");
    }
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
          {Object.keys(quotes).map(index => (
              <ul className='thumb' onClick={event => handleSetClick(event)} data-quote={index} key={index}>
                  
              </ul>
          ))}
        </p>
        <Link >Learn More</Link>
      </div>
      <div className="imgBox">
        <img src={current.Img} alt="" className="starbucks" />
      </div>
      <ul className='thumb'>
          <li><img src={thumb1} alt=''  /></li>
          <li><img src={thumb2} alt='' /></li>
          <li><img src={thumb3} alt='' /></li>
      </ul>
    </div>
  );
};

export default Content;

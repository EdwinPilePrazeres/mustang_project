import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import thumb1 from "../../images/thumb1.png";
import thumb2 from "../../images/thumb2.png";
import thumb3 from "../../images/thumb3.png";
import "./Content.css";

const quotes = [
  {
    id: '1',
    Img: img1,
    thumb: [thumb1, thumb2],
  },
  {
    id: '2',
    Img: img2,
    thumb: thumb2,
  },
  {
    id: '3',
    Img: img3,
  },
];
function Content({list, onhandleGetId}) {

    const [decade, setDecade] = useState(quotes);

    function handleChangeDecade(id) {
        //change decade button
        console.log(id);
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
        </p>
        <Link onClick={() => handleChangeDecade(quotes.id)}>Learn More</Link>
      </div>
      <div className="imgBox">
        <img src={quotes.Img} alt="" className="starbucks" />
      </div>
      <ul className="thumb">
        {list.map((item) => (
          <li key={item.id}>
            <img src={item.thumb} alt="" />
            <button type='button'>aaaa</button>
          </li>
        ))}
        {/* <li><img src={thumb1} alt=''  /></li>
          <li><img src={thumb2} alt='' /></li>
          <li><img src={thumb3} alt='' /></li> */}
      </ul>
    </div>
  );
}

export default Content;

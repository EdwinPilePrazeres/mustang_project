import React from "react";
import "../App.css";
import NavBar from "../components/MenuTop/NavBar";
// import ImageSlider from "../components/ImageSlider";
import Circle from "../components/Circle/Circle";
import Content60 from "../components/Content/Content60";


const Home = () => {
  return (
    <div className="Home">
      {/* <Circle /> */}
      <NavBar />
      <Content60 />
    </div>
  );
};

export default Home;

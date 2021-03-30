import React from 'react'
import '../App.css';
import Circle from '../components/Circle/Circle';
import Ccc from '../components/Content/ccc';
import Content from '../components/Content/Content';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
    return (
        <div className="container">
            {/* <Ccc /> */}
            <Circle />
            <Navbar />
            <Content />
        </div>

    )
}

export default Home

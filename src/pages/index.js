import React from 'react'
import '../App.css';
import Circle from '../components/Circle/Circle';
import Content from '../components/Content/Content';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
    return (
        <div className="container">
            <Circle />
            <Navbar />
            <Content />
        </div>

    )
}

export default Home

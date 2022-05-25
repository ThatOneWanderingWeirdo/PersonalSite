import React, { Component } from 'react';
import logoTest from './images/logo192.png';

const Home = () => {
  return (
    <body>
        <p>Test</p>
        <div className="container bg-dark">
            <div className="row">
                {/* Profile image group*/}
                <div className="col p-2 mb-2 bg-dark text-white">
                    <img src={logoTest} alt="React logo" width="200px"/>
                    <p>testingEmail@gmail.com</p>
                    <p>They/them/Theirs | 19</p>
                </div>
                {/* Intro*/}
                <div className="col p-3 mb-2 bg-dark text-white">
                    <p>Hi! My name is Keyle Barnes</p>
                    <p>and I am a student in</p>
                        <p>Computer Science, feel free to reach out! </p>
                </div>
                <div className="col">
                    Column
                </div>
            </div>
        </div>
    </body>
  );
};
  
export default Home;
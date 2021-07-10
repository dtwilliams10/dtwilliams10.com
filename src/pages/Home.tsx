import React from 'react';
import headshot from './../images/IMG_2332.jpg'

function HomePage() {
        return (
            <div className="App-header">
                <div className="flex-container">
                    <div>
                        <div>
                            <img src={headshot} alt="Tyler Williams - Software Developer" height="450vh" width="450vw"/>
                        </div>
                        <div>
                            <h2>Tyler Williams - Software Developer</h2>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="flex-container">
                    <div>
                        <div>
                            Middle Block Left
                        </div>
                        <div>
                            Middle Block Right
                        </div>
                    </div>
                </div>
                <div className="flex-container">
                    <div>
                        <div className="left">
                            Bottom Block Left
                        </div>
                        <div className="right">
                            Bottom Block Right
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default HomePage;
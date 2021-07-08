import React from 'react';

function HomePage() {
        return (
            <div className="App-header">
                <div className="flex-container">
                    <div>
                        <div>
                            Top Block Left
                        </div>
                        <div>
                            Top Block Right
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
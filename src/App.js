import React from 'react';
import './App.css';
import 'h8k-components';

import Slides from './components/Slides';
const title = "Slideshow App";

function App() {
    const slides = [
        {
            id:0,
            title: "Today's workout plan",
            text: "We're gonna do 3 fundamental exercises."
        },
        {
            id:1,
            title: "First, 10 push-ups",
            text: "Do 10 reps. Remember about full range of motion. Don't rush."
        },
        {
            id:2,
            title: "Next, 20 squats",
            text: "Squats are important. Remember to keep your back straight."
        },
        {
            id:3,
            title: "Finally, 15 sit-ups",
            text: "Slightly bend your knees. Remember about full range of motion."
        },
        {
            id:4,
            title: "Great job!",
            text: "You made it, have a nice day and see you next time!"
        }
    ];
    return (
        <div>
            <h8k-navbar header={title}></h8k-navbar>
            <div className="App">
                <Slides slides={slides} />
            </div>
        </div>
    );
}

export default App;

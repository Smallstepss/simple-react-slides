import React,{useState} from 'react';

function Slides({slides}) {

    const[currentSlide,setCurrentSlide]=useState(0);

    const restart =()=>{setCurrentSlide(0)};

    const prevSlide = () =>{setCurrentSlide((prev)=>(prev===0? slides.length-1: prev-1))}

   const nextSlide=()=>{setCurrentSlide((prev)=>(   prev=== slides.length-1? 0   :prev+1))}

    return (
        <div>
            <div id="navigation" className="text-center">
                
                <button  className="small" onClick={prevSlide}>Prev</button>
                <button  className="small outlined" onClick={restart}>Restart</button>
                <button  className="small" onClick={nextSlide}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 >{slides[currentSlide].title}</h1>
                <p >{slides[currentSlide].text}</p>
            </div>
        </div>
    );

}

export default Slides;

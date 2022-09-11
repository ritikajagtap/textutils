import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
        console.log("Uppercase was clicked")
        setText("You have clicked on handleUpClick")
    }
    const handleOnChange = ()=> {
        console.log("Onchange was clicked")
    }
    const [text, setText] = useState('Enter Text here');
    //text = "this is the text" //wrong way to change the state
    // setText = {"New text"}; //correct way
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}

import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const clearText = ()=> {
        setText("");
        props.showAlert("Cleared the Text", "success");
    }
    const handleOnChange = (event)=> {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //text = "this is the text" //wrong way to change the state
    // setText = {"New text"}; //correct way
    return (
        <>
        <div className='container' style={{color:  props.mode === 'dark' ? "white" : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:  props.mode === 'dark' ? "grey" : 'white', color:  props.mode === 'dark' ? "white" : 'black'}}id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
        </div>
        <div className="container my-2" style={{color:  props.mode === 'dark' ? "white" : 'black'}}>
            <h1>Your Text Summary</h1>
            <p>
                {text.split(" ").length} words, 43454 characters
            </p>
            <p>
                {0.008 * text.split(" ").length} Minutes read
            </p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

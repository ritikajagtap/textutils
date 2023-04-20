import React, {useState} from 'react'


export default function TextForm(props) {
    var regex = /\S/g; 
    
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied", "success");
    }
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
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        // console.log(newText);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "success");
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
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCopy} >Copy Text</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
            <button className="btn btn-danger mx-2" onClick={clearText}>Clear Text</button>
        </div>
        <div className="container my-2" style={{color:  props.mode === 'dark' ? "white" : 'black'}}>
            <h1>Your Text Summary</h1>
            <p>
                {text.split(" ").length} words, {text.split(regex).length - 1} characters
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

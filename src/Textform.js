import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
   // setInterval(()=>{
    //   document.title = 'this text-app is amazing'
    // } , 1000);
     setInterval(()=>{
      document.title = 'install the app '
    } , 1000);
  };

  const handlelowClick = () => {
    setText(text.toLowerCase());
  };
 const handleremovespaceClick = () => {
   const newText = text.replace(/\s+/g, '');
   setText(newText);
  };

  const handleclearClick = () => {
    setText("");
  };

  const speak = () => {
    if (text.trim() !== "") {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const readingTime = (wordCount / 200).toFixed(2);

  return (   
    <>
      <div className="mb-3 my-3">
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          rows="12"
        ></textarea>
      </div>

      <div>
        <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>
          Convert to Lowercase
        </button>
        <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleremovespaceClick}>
         Remove extra space
        </button>
         <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={speak}>
          Speak Text
        </button>

        <button disabled= {text.length===0} className="btn btn-danger mx-1" onClick={handleclearClick}>
          Clear Text
        </button>

       
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {wordCount} Words & {text.length} Characters
        </p>
        <p>{readingTime} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text in above text box to preview it here"}</p>
      </div>
    </>
  );
}

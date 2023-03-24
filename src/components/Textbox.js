import React, { useState } from "react";

export default function Textbox(props) {
  const handleUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case", "success")
  };
  const handleLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case", "success")
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("remove all the text successfully", "success")
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h2 className="text-center">{props.heading}</h2>
        <div className="form-group mb-3">
          <label htmlFor="tx1">{props.textenter}</label>
          <br />
          <br />
          <textarea
            className= {`form-control`}
            value={text}
            onChange={handleonchange}
            id="tx1"
            rows="5"
          ></textarea>
        </div>
        <button disabled={text.length===0 } className="btn btn-primary" onClick={handleUppercase}>
          Convert to UPPER CASE
        </button>
        <button disabled={text.length===0 } className="btn btn-success mx-3" onClick={handleLowercase}>
          Convert to lower case
        </button>
        <button disabled={text.length===0 } className="btn btn-warning mx-3" onClick={handleClear}>
          Clear text
        </button>
      </div>
      <div className="container my-3">
        <h2> Your Text Counting :</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} Words, {text.length} Character
        </p>
        <p>
          {" "}
          Time to read the text inside the box: {0.008 *
            text.split("").filter((element)=>{return element.length!==0}).length}{" "}
          minutes
        </p>
        <h3>Preview in a para</h3>
        <p> {text} </p>
      </div>
    </>
  );
}

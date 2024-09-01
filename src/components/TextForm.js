import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState();

  const toUppercase = () => {
    setText(text?.toUpperCase());
    props.showAlert("Text has been capitalized", "primary");
  };
  const toLowercase = () => {
    setText(text?.toLowerCase());
    props.showAlert("Text has been lowecased", "primary");
  };
  const clearText = () => {
    setText("");
    props.showAlert("Text has been cleared", "primary");
  };
  const reverseText = () => {
    setText(text?.split("").reverse().join(""));
    props.showAlert("Text has been reversed", "primary");
  };
  const onChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container my-3">
        <div className={`mb-3 text-${props.mode ? "light" : "dark"}`}>
          <h1>{props.textAreaLabel}</h1>
          <textarea
            className={`form-control text-${props.mode ? "white" : "dark"} bg-${
              props.mode ? "black" : "white"
            }`}
            id="myBox"
            rows="10"
            value={text}
            placeholder={props.placeholder}
            onChange={onChange}
          ></textarea>
        </div>
        <div className="btn btn btn-primary mx-1" onClick={toUppercase}>
          To Uppercase
        </div>
        <div className="btn btn btn-primary mx-1" onClick={toLowercase}>
          To Lowercase
        </div>
        <div className="btn btn btn-primary mx-1" onClick={reverseText}>
          Reverse Text
        </div>
        <div className="btn btn btn-primary mx-1" onClick={clearText}>
          Clear Text
        </div>
      </div>
      <div className={`container my-10 text-${props.mode ? "light" : "dark"}`}>
        <h2>Your text summary</h2>
        <p>
          Your text has {text?.split(" ").length || 0} words and{" "}
          {text?.length || 0} characters
        </p>
        <p>
          It will take {0.008 * text?.split(" ").length || 0} minutes to read
          through the text
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  textAreaLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  mode: PropTypes.bool.isRequired,
  showAlert: PropTypes.func,
};

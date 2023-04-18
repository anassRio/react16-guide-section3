import { useState } from "react";
import "./App.css";
import { sampleText } from "./sampleText";

function App() {
  const [text, setText] = useState(sampleText);

  const handleTextAreaChange = (event) => {
    const modifiedText = event.target.value;
    setText(modifiedText);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <textarea
            value={text}
            className="form-control"
            rows="35"
            onChange={handleTextAreaChange}
          ></textarea>
        </div>
        <div className="col-sm-6">
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./App.css";
import { sampleText } from "./sampleText";
import { marked } from "marked";

function App() {
  const [text, setText] = useState(sampleText);
  const [isMounted, setIsMounted] = useState(false);

  // componenDidMount
  useEffect(() => {
    const storedText = localStorage.getItem("text") || sampleText;
    setText(storedText);
    setIsMounted(true);
  }, []);

  // componentDidUpdate
  useEffect(() => {
    if (isMounted) {
      console.log("Le Text a changé !!");
      localStorage.setItem("text", text);
    }
  }, [text, isMounted]);

  const handleTextAreaChange = (event) => {
    const modifiedText = event.target.value;
    setText(modifiedText);
  };

  const renderText = (text) => {
    const __html = marked(text, { sanitize: true });
    return { __html };
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
          {/** 
           * dangerouslySetInnerHTML:
           * Attention l'information vient d'un utilisateur ( elle peut representer
          un danger)
           */}
          <div dangerouslySetInnerHTML={renderText(text)}></div>
        </div>
      </div>
    </div>
  );
}

export default App;

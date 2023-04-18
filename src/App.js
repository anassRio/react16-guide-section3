import "./App.css";
import { sampleText } from "./sampleText";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <textarea
            value={sampleText}
            className="form-control"
            rows="35"
          ></textarea>
        </div>
        <div className="col-sm-6">
          <div>{sampleText}</div>
        </div>
      </div>
    </div>
  );
}

export default App;

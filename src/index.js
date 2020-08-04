import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

function Room() {
  const [isLit, setLit] = React.useState(true);
  const brightness = isLit ? "lit" : "dark";


  return (
    <div className={`room ${brightness}`}>
      The room is {brightness}
      <br />
      <button onClick={() => setLit(!isLit)}>Flip</button>
    </div>
  );
}
ReactDOM.render(<Room />, document.getElementById("root"));